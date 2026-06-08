const fs = require('fs');
const path = require('path');

// 1. Update package.json scripts
const pkgPath = 'package.json';
if (fs.existsSync(pkgPath)) {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    pkg.scripts = {
        "dev": "vite",
        "build": "vite build",
        "preview": "vite preview"
    };
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
}

// 2. Create directories
const dirs = ['src', 'src/components', 'src/pages', 'public'];
dirs.forEach(dir => {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

// 3. Move style.css
if (fs.existsSync('style.css')) {
    fs.copyFileSync('style.css', 'src/index.css');
}

// 4. Move assets
if (fs.existsSync('assets')) {
    // Vite serves public/assets at /assets/
    if (!fs.existsSync('public/assets')) {
        fs.renameSync('assets', 'public/assets');
    }
}

// 5. Create new index.html (Vite entry)
if (fs.existsSync('index.html')) {
    fs.renameSync('index.html', 'home_backup.html');
}
fs.writeFileSync('index.html', `<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Centrelatio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`);

// Backup other HTML files to refer to later
const pages = ['tarifs.html', 'ressources.html', 'entreprises.html', 'connexion.html'];
pages.forEach(page => {
    if (fs.existsSync(page)) {
        fs.renameSync(page, page.replace('.html', '_backup.html'));
    }
});

// 6. Create main.jsx
fs.writeFileSync('src/main.jsx', `import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`);

// 7. Create App.jsx (routing shell)
fs.writeFileSync('src/App.jsx', `import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
`);

console.log('Migration scaffold completed successfully.');
