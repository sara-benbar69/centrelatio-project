const fs = require('fs');

const pages = [
  { file: 'tarifs_backup.html', name: 'Tarifs' },
  { file: 'ressources_backup.html', name: 'Ressources' },
  { file: 'entreprises_backup.html', name: 'Entreprises' },
  { file: 'connexion_backup.html', name: 'Connexion' }
];

function htmlToJsx(html) {
  let jsx = html.replace(/class=/g, 'className=');
  jsx = jsx.replace(/for=/g, 'htmlFor=');
  jsx = jsx.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
  jsx = jsx.replace(/<br>/g, '<br />');
  jsx = jsx.replace(/<hr>/g, '<hr />');
  jsx = jsx.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
  jsx = jsx.replace(/<!--[\s\S]*?-->/g, ''); // remove comments
  // fix inline styles if any (like style="width: 100%;")
  jsx = jsx.replace(/style="([^"]+)"/g, (match, p1) => {
    const styleObj = p1.split(';').filter(Boolean).map(s => {
      const parts = s.split(':');
      if(parts.length < 2) return '';
      const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
      const val = parts.slice(1).join(':').trim();
      return `${key}: "${val}"`;
    }).join(', ');
    return `style={{${styleObj}}}`;
  });
  return jsx;
}

pages.forEach(page => {
  if (fs.existsSync(page.file)) {
    let content = fs.readFileSync(page.file, 'utf8');
    
    let mainContent = '';
    if (page.name === 'Connexion') {
      // Extract everything inside body except script tags
      const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/);
      if (bodyMatch) {
         mainContent = bodyMatch[1].replace(/<script[\s\S]*?<\/script>/g, '');
      }
    } else {
      // Extract <main> content
      const mainMatch = content.match(/<main>([\s\S]*?)<\/main>/);
      if (mainMatch) {
         mainContent = mainMatch[1];
      }
    }
    
    if (mainContent) {
      const jsxContent = htmlToJsx(mainContent);
      
      const componentCode = `import { useEffect } from 'react';\nimport { Link } from 'react-router-dom';\n\nfunction ${page.name}() {\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, []);\n\n  return (\n    <main className="page-main">\n      ${jsxContent}\n    </main>\n  );\n}\n\nexport default ${page.name};`;
      
      fs.writeFileSync(`src/pages/${page.name}.jsx`, componentCode);
      console.log(`Created ${page.name}.jsx`);
    }
  }
});

// Update App.jsx with imports
const appCode = `import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tarifs from './pages/Tarifs'
import Ressources from './pages/Ressources'
import Entreprises from './pages/Entreprises'
import Connexion from './pages/Connexion'

function App() {
  const location = useLocation();
  const isConnexion = location.pathname === '/connexion';

  return (
    <>
      {!isConnexion && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarifs" element={<Tarifs />} />
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/entreprises" element={<Entreprises />} />
        <Route path="/connexion" element={<Connexion />} />
      </Routes>
      {!isConnexion && <Footer />}
    </>
  )
}

export default App
`;
fs.writeFileSync('src/App.jsx', appCode);
console.log('App.jsx updated with all routes.');
