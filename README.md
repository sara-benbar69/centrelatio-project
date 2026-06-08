# Centrelatio

## Description

Centrelatio est une application web de présentation de services et de génération de leads développée avec React et Vite.

Le projet permet aux visiteurs de découvrir les services proposés par l’entreprise et de soumettre des demandes via différents formulaires. Les informations collectées sont automatiquement enregistrées dans Google Sheets grâce à Google Sheets API.

L’objectif principal est de centraliser les demandes clients dans une solution simple, fiable et facile à maintenir sans base de données traditionnelle.

---

# URL de Production

Application disponible en production :

https://centrelatio.com/

---

# Architecture

```text
Utilisateur
      ↓
https://centrelatio.com
      ↓
submit.php
      ↓
Google Sheets API
      ↓
Google Sheet
```

Google Sheets constitue l’unique système de stockage des leads dans la version actuelle du projet.

---

# Technologies Utilisées

## Frontend

* React 19
* Vite
* React Router DOM
* Tailwind CSS
* Framer Motion
* React Hot Toast
* Lucide React

## Backend

* PHP 8
* API JSON

## Services Externes

* Google Sheets API
* Google Service Account

## Outils de Développement

* Node.js
* npm
* Vite
* Nodemon

---

# Fonctionnalités Principales

* Site vitrine responsive
* Présentation des services
* Formulaire de contact
* Formulaire de demande de ressources
* Validation des données côté client et serveur
* Enregistrement automatique dans Google Sheets
* Gestion des erreurs
* Réponses JSON standardisées

---

# Structure du Projet

```text
CENTRELATIO/
│
├── public/
│   ├── assets/
│   ├── robots.txt
│   └── submit.php
│
├── server/
│   └── index.js
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── lib/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── .env.example
├── package.json
├── vite.config.js
└── README.md
```

---

# Pages Disponibles

| Route        | Description                           |
| ------------ | ------------------------------------- |
| /            | Page d'accueil                        |
| /entreprises | Présentation des services entreprises |
| /tarifs      | Présentation des offres et tarifs     |
| /ressources  | Demande de ressources                 |
| /contact     | Formulaire de contact                 |

---

# Gestion des Formulaires

Les formulaires du site transmettent les données à l’endpoint PHP :

```http
POST /submit.php
```

## Exemple de requête

```json
{
  "fullname": "John Doe",
  "whatsappNumber": "+212600000000",
  "email": "john@example.com",
  "entreprise": "Entreprise Demo",
  "serviceInterested": "Développement Web",
  "socialSource": "Website",
  "message": "Bonjour",
  "isPremiumClient": false,
  "formType": "lead"
}
```

## Réponse de succès

```json
{
  "success": true
}
```

## Réponse d’erreur

```json
{
  "success": false,
  "message": "Description de l'erreur"
}
```

---

# Traitement des Leads

Le fichier `submit.php` :

1. Reçoit les données du formulaire.
2. Vérifie la validité des informations.
3. Authentifie le compte de service Google.
4. Appelle Google Sheets API.
5. Ajoute une nouvelle ligne dans Google Sheets.
6. Retourne une réponse JSON au frontend.

---

# Configuration Google Sheets

Le projet nécessite :

* Un projet Google Cloud
* Google Sheets API activée
* Un Service Account Google
* Une clé JSON valide

Variables principales utilisées :

```php
GOOGLE_SERVICE_ACCOUNT_FILE
GOOGLE_SPREADSHEET_ID
GOOGLE_SHEET_RANGE
```

⚠️ Le fichier de compte de service ne doit jamais être publié dans un dépôt Git public.

---

# Installation

## Installation des dépendances

```bash
npm install
```

---

# Développement Local

## Démarrer le frontend

```bash
npm run dev
```

Frontend disponible sur :

```text
http://localhost:5173
```

## Démarrer le serveur Express (optionnel)

```bash
npm run server
```

Serveur disponible sur :

```text
http://localhost:5000
```

## Démarrer l’endpoint PHP

```bash
php -S localhost:8000 -t public
```

Endpoint disponible sur :

```text
http://localhost:8000/submit.php
```

---

# Scripts Disponibles

```bash
npm run dev
```

Lance le serveur de développement Vite.

```bash
npm run build
```

Génère le build de production.

```bash
npm run preview
```

Prévisualise le build de production.

```bash
npm run server
```

Lance le serveur Express.

```bash
npm run dev:all
```

Lance simultanément Vite et Express.

---

# Déploiement

## Hébergement

* Frontend : cPanel
* Backend PHP : cPanel
* Stockage : Google Sheets API

## Mise en production

1. Générer le build :

```bash
npm run build
```

2. Envoyer les fichiers générés vers le serveur cPanel.

3. Vérifier le fonctionnement du site.

4. Tester les formulaires.

5. Vérifier l’enregistrement des données dans Google Sheets.

---

# Vérification Après Déploiement

* Vérifier l’accès à https://centrelatio.com/
* Vérifier le formulaire de contact
* Vérifier le formulaire de ressources
* Vérifier les réponses JSON
* Vérifier la réception des leads dans Google Sheets
* Vérifier l’absence d’erreurs JavaScript dans le navigateur

---

# Sécurité

Le backend effectue :

* Validation des champs obligatoires
* Validation du format email
* Gestion des erreurs PHP
* Gestion des erreurs Google Sheets API
* Réponses JSON sécurisées

---

# Notes Importantes

* Google Sheets est l’unique système de stockage utilisé.
* Aucune base de données MySQL ou PostgreSQL n’est utilisée dans la version actuelle.
* Le flux principal de l’application est :

```text
React Frontend
      ↓
submit.php
      ↓
Google Sheets API
      ↓
Google Sheet
```

* Le serveur Express présent dans le projet est conservé pour des besoins complémentaires et de développement, mais il n’intervient pas dans la collecte principale des leads.

---

# Auteur

Projet réalisé dans le cadre d’un projet professionnel de développement web.
