const fs = require('fs');

const tariffsCSS = `
/* =========================================
   TARIFS PAGE
   ========================================= */

.pricing-header {
    text-align: center;
    padding: 4rem 2rem 2rem;
    max-width: 800px;
    margin: 0 auto;
}

.pricing-toggle {
    display: inline-flex;
    background-color: var(--bg-light);
    border-radius: 50px;
    padding: 0.5rem;
    margin-top: 2rem;
    border: 1px solid var(--border-color);
}

.toggle-btn {
    border: none;
    background: transparent;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    font-size: 0.95rem;
    transition: all 0.3s;
    line-height: 1.2;
}

.toggle-btn.active {
    background-color: var(--secondary-color);
    color: white;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.toggle-btn.inactive {
    color: var(--text-main);
}

.toggle-btn small {
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.8;
}

.toggle-btn.inactive small {
    color: var(--text-muted);
}

.pricing-cards-section {
    padding: 2rem 2rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
}

.pricing-cards {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

@media(min-width: 768px) {
    .pricing-cards {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
}

@media(min-width: 1100px) {
    .pricing-cards {
        flex-wrap: nowrap;
    }
}

.pricing-card {
    background: white;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    padding: 2.5rem 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: transform 0.3s, box-shadow 0.3s;
}

.pricing-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.05);
}

.pricing-card.popular {
    border-color: var(--secondary-color);
    box-shadow: 0 10px 40px rgba(18,140,126,0.1);
}

.popular-badge {
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #0056b3;
    color: white;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.3rem 1rem;
    border-radius: 50px;
    letter-spacing: 0.5px;
}

.card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.card-header h3 {
    margin: 0;
    font-size: 1.2rem;
}

.card-header p {
    margin: 0;
    font-size: 0.8rem;
    color: var(--text-muted);
}

.price {
    margin-bottom: 1rem;
}

.amount {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary-color);
}

.currency {
    font-size: 0.9rem;
    color: var(--text-muted);
    font-weight: 600;
}

.text-large {
    font-size: 2rem;
}

.card-desc {
    font-size: 0.9rem;
    color: var(--text-muted);
    margin-bottom: 2rem;
    min-height: 40px;
}

.features-list {
    list-style: none;
    margin-bottom: 2rem;
    flex-grow: 1;
}

.features-list li {
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    color: var(--text-main);
}

.features-list i {
    margin-top: 0.2rem;
}

.green-border {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
}
.green-border:hover {
    background-color: var(--secondary-color);
    color: white;
}

.pricing-footer-text {
    text-align: center;
    margin-top: 3rem;
    font-size: 0.9rem;
    color: var(--text-muted);
    background-color: var(--bg-light);
    padding: 1rem;
    border-radius: 8px;
    display: inline-block;
    width: 100%;
}

.bg-light-section {
    background-color: var(--bg-light);
    padding: 5rem 2rem;
}

.journey-header {
    max-width: 1200px;
    margin: 0 auto;
    background: white;
    border-radius: 20px;
    padding: 3rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    border: 1px solid var(--border-color);
}

@media(min-width: 992px) {
    .journey-header {
        display: flex;
        align-items: center;
        gap: 3rem;
    }
    .j-header-text {
        flex: 1;
    }
    .journey-steps {
        flex: 2;
    }
}

.j-header-text h2 {
    text-align: left;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.j-header-text p {
    color: var(--text-muted);
    font-size: 0.95rem;
}

.journey-steps {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    margin-top: 2rem;
}

.j-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 2;
    width: 100px;
}

.j-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    background: white;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

.j-step h4 {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
}

.j-step p {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.j-line {
    flex-grow: 1;
    height: 1px;
    border-top: 2px dashed var(--border-color);
    margin: 25px 10px 0;
}

.security-banner-wrapper {
    padding: 0 2rem 5rem;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: -3rem;
    position: relative;
    z-index: 5;
}

.security-banner {
    border-radius: 16px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: white;
}

@media(min-width: 992px) {
    .security-banner {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
    }
    .sec-left {
        flex: 1;
        display: flex;
        gap: 1.5rem;
        align-items: flex-start;
    }
    .sec-right {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        justify-content: flex-end;
    }
}

.sec-icon-large {
    font-size: 3.5rem;
    color: var(--icon-cyan-bg);
}

.sec-text h3 {
    color: white;
    text-align: left;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.sec-text p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
}

.sec-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.85rem;
    font-weight: 600;
}
.sec-item i {
    font-size: 1.5rem;
}

/* Testimonials Row */
.testimonials-row {
    padding: 5rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--bg-white) !important;
}

.t-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
}

@media(min-width: 768px) {
    .t-cards {
        grid-template-columns: repeat(3, 1fr);
    }
}

.t-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
    position: relative;
}

.quote-mark-small {
    color: var(--secondary-color);
    font-size: 3rem;
    font-family: Georgia, serif;
    line-height: 1;
    margin-bottom: 0.5rem;
}

.t-card p {
    font-size: 0.95rem;
    color: var(--text-main);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--border-color);
}

.dot.active {
    background-color: var(--secondary-color);
}

/* Final CTA Horizontal */
.final-cta-horizontal {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.cta-banner-inner {
    background-color: var(--secondary-color);
    border-radius: 20px;
    padding: 3rem;
    color: white;
    background: linear-gradient(135deg, var(--secondary-color), #09685d);
}

.cta-text-row {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    text-align: center;
}

@media(min-width: 992px) {
    .cta-text-row {
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
    }
    .cta-icon-text {
        display: flex;
        align-items: center;
        gap: 2rem;
    }
}

.cta-banner-text-left h2 {
    color: white;
    text-align: left;
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
}

.cta-banner-text-left p {
    margin: 0;
    opacity: 0.9;
}
`;

fs.appendFileSync('style.css', tariffsCSS, 'utf8');

// Also update index.html why-choose-list to be horizontal
let cssContent = fs.readFileSync('style.css', 'utf8');
cssContent = cssContent.replace(
`.why-choose-list {
    list-style: none;
    margin-top: 2rem;
}`,
`.why-choose-list {
    list-style: none;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
}`
);
cssContent = cssContent.replace(
`.why-choose-list li {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background-color: var(--bg-white);
    padding: 1rem;
    border-radius: 12px;
    border: 1px solid var(--border-color);
}`,
`.why-choose-list li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    background-color: transparent;
    padding: 1rem;
    border-radius: 12px;
    border: none;
    flex: 1;
    min-width: 150px;
}
.why-choose-list li i {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--icon-cyan-bg);
    color: var(--secondary-color);
    font-size: 1.5rem;
    margin: 0 auto;
}
.why-choose-list li div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
.why-choose-list li div strong {
    font-size: 1rem;
    color: var(--primary-color);
}
.why-choose-list li div {
    font-size: 0.85rem;
}`
);

fs.writeFileSync('style.css', cssContent, 'utf8');

console.log("Appended Tarifs CSS and fixed index.html why-choose layout.");
