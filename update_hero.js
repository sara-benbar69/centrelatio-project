const fs = require('fs');

let indexContent = fs.readFileSync('index.html', 'utf8');

// Replace hero-graphics
const heroGraphicsRegex = /<div class="hero-graphics">[\s\S]*?<\/div>\s*<\/div>/;
// Wait, the end of hero-graphics is:
//                 </div>
//             </div>
// Let's just use string replace.
const startIndex = indexContent.indexOf('<div class="hero-graphics">');
const endIndex = indexContent.indexOf('<div class="hero-cta">');

if (startIndex !== -1 && endIndex !== -1) {
    const replacement = `
            <div class="hero-graphics">
                <img src="assets/hero-illustration.png" alt="Centrelatio Plateforme" style="width: 100%; max-width: 900px; height: auto;">
            </div>

            `;
    indexContent = indexContent.substring(0, startIndex) + replacement + indexContent.substring(endIndex);
    fs.writeFileSync('index.html', indexContent, 'utf8');
    console.log("Updated index.html hero graphics.");
} else {
    console.log("Could not find hero-graphics block.");
}
