const fs = require('fs');

const files = ['index.html', 'tarifs.html', 'ressources.html', 'entreprises.html'];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Header Logo
        content = content.replace(
            '<div class="logo-text-header"><i class="fa-solid fa-circle-nodes"></i> CENTRELATIO</div>',
            '<img src="assets/logo.png" alt="Centrelatio" class="logo-img">'
        );
        
        // Footer Logo
        content = content.replace(
            '<div class="logo-text"><i class="fa-solid fa-circle-nodes"></i> CENTRELATIO</div>',
            '<img src="assets/logo-white.png" alt="Centrelatio" class="footer-logo-img">'
        );
        
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated ${file}`);
    } catch (err) {
        console.error(`Error processing ${file}: ${err.message}`);
    }
});
