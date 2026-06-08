<?php
declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('display_startup_errors', '0');
ob_start();
register_shutdown_function(function (): void {
    $error = error_get_last();
    if ($error === null) {
        return;
    }

    $fatalTypes = [E_ERROR, E_PARSE, E_CORE_ERROR, E_COMPILE_ERROR, E_USER_ERROR];
    if (!in_array($error['type'], $fatalTypes, true)) {
        return;
    }

    if (!headers_sent()) {
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');
    }

    if (ob_get_length() !== false) {
        @ob_clean();
    }

    echo json_encode([
        'success' => false,
        'error' => 'Erreur serveur interne.',
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
});

/*
 * Centrelatio lead endpoint for shared cPanel hosting.
 *
 * Place this file in public_html/submit.php after build/deploy.
 * Storage is handled exclusively via Google Sheets.
 * For Google Sheets, put the service account JSON outside public_html.
 */

const ALLOWED_ORIGINS = [
    'https://centrelatio.com',
    'https://www.centrelatio.com',
    'http://localhost:5173',
];

// Google Sheets settings.
// Recommended on cPanel: /home/CPANEL_USER/google-service-account.json
// Local fallback also accepts server/google-service-account.json.
const GOOGLE_SERVICE_ACCOUNT_FILE = __DIR__ . '/../google-service-account.json';
const GOOGLE_SPREADSHEET_ID = '1Rp2btvVo-c47-dUAVy_o15-MORqYk4qM_eOALEN8_1I';
const GOOGLE_SHEET_RANGE = 'Leads!A:F';

function respond(int $status, array $payload): void
{
    if (ob_get_length() !== false) {
        @ob_clean();
    }

    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function configureCors(): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

    if ($origin && in_array($origin, ALLOWED_ORIGINS, true)) {
        header("Access-Control-Allow-Origin: {$origin}");
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Accept');
    header('Access-Control-Max-Age: 86400');

    if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
        respond(200, ['success' => true]);
    }
}

function cleanString($value): string
{
    $value = is_string($value) ? $value : '';
    $value = trim($value);
    return preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
}

function readJsonBody(): array
{
    $raw = file_get_contents('php://input') ?: '';
    $data = json_decode($raw, true);

    if (!is_array($data)) {
        respond(400, [
            'success' => false,
            'error' => 'JSON invalide.',
        ]);
    }

    return $data;
}

function validateLead(array $input): array
{
    $lead = [
        'fullname' => cleanString($input['fullname'] ?? ''),
        'email' => cleanString($input['email'] ?? ''),
        'entreprise' => cleanString($input['entreprise'] ?? ''),
        'whatsappNumber' => cleanString($input['whatsappNumber'] ?? ''),
        'serviceInterested' => cleanString($input['serviceInterested'] ?? ''),
    ];

    $errors = [];

    if (strlen($lead['fullname']) < 2) {
        $errors['fullname'] = 'Le nom complet est requis.';
    }

    if (strlen($lead['whatsappNumber']) < 5 || !preg_match('/^[0-9+\s().-]{5,25}$/', $lead['whatsappNumber'])) {
        $errors['whatsappNumber'] = 'Le numéro WhatsApp est invalide.';
    }

    if ($lead['email'] !== '' && !filter_var($lead['email'], FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = 'Adresse email invalide.';
    }

    if (strlen($lead['entreprise']) < 2) {
        $errors['entreprise'] = 'Le nom de l entreprise est requis.';
    }

    if ($lead['serviceInterested'] === '') {
        $errors['serviceInterested'] = 'Le service d intérêt est requis.';
    }

    if ($errors) {
        respond(422, [
            'success' => false,
            'error' => 'Veuillez corriger les champs du formulaire.',
            'errors' => $errors,
        ]);
    }

    return $lead;
}

function base64UrlEncode(string $data): string
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function getGoogleAccessToken(): string
{
    $serviceAccountFile = GOOGLE_SERVICE_ACCOUNT_FILE;

    if (!is_readable($serviceAccountFile)) {
        $fallbackFiles = [
            __DIR__ . '/google-service-account.json',
            __DIR__ . '/server/google-service-account.json',
            __DIR__ . '/../server/google-service-account.json',
        ];

        foreach ($fallbackFiles as $fallbackFile) {
            if (is_readable($fallbackFile)) {
                $serviceAccountFile = $fallbackFile;
                break;
            }
        }
    }

    if (!is_readable($serviceAccountFile)) {
        throw new RuntimeException('Google service account file introuvable.');
    }

    $credentials = json_decode((string) file_get_contents($serviceAccountFile), true);
    if (!is_array($credentials) || empty($credentials['client_email']) || empty($credentials['private_key'])) {
        throw new RuntimeException('Google service account JSON invalide.');
    }

    $now = time();
    $header = ['alg' => 'RS256', 'typ' => 'JWT'];
    $claim = [
        'iss' => $credentials['client_email'],
        'scope' => 'https://www.googleapis.com/auth/spreadsheets',
        'aud' => 'https://oauth2.googleapis.com/token',
        'iat' => $now,
        'exp' => $now + 3600,
    ];

    $unsignedJwt = base64UrlEncode(json_encode($header)) . '.' . base64UrlEncode(json_encode($claim));
    $signature = '';
    $signed = openssl_sign($unsignedJwt, $signature, $credentials['private_key'], OPENSSL_ALGO_SHA256);

    if (!$signed) {
        throw new RuntimeException('Impossible de signer le JWT Google.');
    }

    $jwt = $unsignedJwt . '.' . base64UrlEncode($signature);

    $ch = curl_init('https://oauth2.googleapis.com/token');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/x-www-form-urlencoded'],
        CURLOPT_POSTFIELDS => http_build_query([
            'grant_type' => 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            'assertion' => $jwt,
        ]),
        CURLOPT_TIMEOUT => 15,
    ]);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false || $status >= 400) {
        throw new RuntimeException('Erreur OAuth Google: ' . ($error ?: $response));
    }

    $token = json_decode((string) $response, true);
    if (empty($token['access_token'])) {
        throw new RuntimeException('Access token Google manquant.');
    }

    return $token['access_token'];
}

function saveToGoogleSheets(array $lead): void
{
    if (GOOGLE_SPREADSHEET_ID === 'PUT_YOUR_SPREADSHEET_ID_HERE' || GOOGLE_SPREADSHEET_ID === '') {
        throw new RuntimeException('GOOGLE_SPREADSHEET_ID non configuré.');
    }

    $token = getGoogleAccessToken();
    $url = "https://sheets.googleapis.com/v4/spreadsheets/" . GOOGLE_SPREADSHEET_ID . "/values/" .
     rawurlencode(GOOGLE_SHEET_RANGE) . 
     ":append?valueInputOption=RAW";

$values = [[
    $lead['fullname'],
    $lead['email'],
    $lead['entreprise'],
    $lead['whatsappNumber'],
    $lead['serviceInterested'],
    gmdate('c'),
]];

    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HTTPHEADER => [
            'Authorization: Bearer ' . $token,
            'Content-Type: application/json',
        ],
        CURLOPT_POSTFIELDS => json_encode(['values' => $values], JSON_UNESCAPED_UNICODE),
        CURLOPT_TIMEOUT => 15,
    ]);

    $response = curl_exec($ch);
    $status = (int) curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    $error = curl_error($ch);
    curl_close($ch);

    if ($response === false || $status >= 400) {
        throw new RuntimeException('Erreur Google Sheets: ' . ($error ?: $response));
    }
}

configureCors();

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(405, [
        'success' => false,
        'error' => 'Méthode non autorisée.',
    ]);
}

try {
    $lead = validateLead(readJsonBody());

    saveToGoogleSheets($lead);

    respond(201, [
        'success' => true,
        'message' => 'Demande envoyée avec succès.',
    ]);
} catch (Throwable $error) {
    error_log('[submit.php] ' . $error->getMessage());

    respond(500, [
        'success' => false,
        'error' => 'Erreur serveur. Veuillez réessayer plus tard.',
    ]);
}
