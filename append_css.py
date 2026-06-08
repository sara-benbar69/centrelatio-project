import os

css_content = """
/* =========================================
   RESSOURCES PAGE
   ========================================= */

/* Resources Hero */
.resources-hero {
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: var(--bg-white);
}

@media(min-width: 992px) {
    .resources-hero {
        flex-direction: row;
        align-items: center;
        gap: 3rem;
    }
    .resources-hero-content {
        flex: 1;
    }
    .resources-hero-graphics {
        flex: 1;
    }
}

.tag-blue {
    display: inline-block;
    background-color: var(--icon-cyan-bg);
    color: var(--icon-cyan-text);
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.4rem 0.8rem;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
}

.resources-hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.resources-mockup {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
}

.main-mockup-img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.floating-badge {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    font-size: 0.85rem;
    font-weight: 600;
}

.badge-icon {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
}

.badge-guides { top: -20px; left: -20px; }
.badge-webinaires { bottom: 20px; left: -30px; }
.badge-blog { top: 20px; right: -30px; }
.badge-bonnes-pratiques { bottom: -20px; right: -20px; }

.whatsapp-bubble-large {
    position: absolute;
    bottom: -30px;
    right: -50px;
    width: 80px;
    height: 80px;
    background-color: var(--secondary-color);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 3rem;
    box-shadow: 0 10px 25px rgba(18, 140, 126, 0.3);
    border: 4px solid white;
}

/* Resources Cards Section */
.resources-cards-section {
    padding: 4rem 2rem;
}

.resources-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
}

@media(min-width: 600px) {
    .resources-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(min-width: 992px) {
    .resources-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.resource-card-large {
    background: white;
    border-radius: 12px;
    padding: 2rem 1.5rem;
    border: 1px solid var(--border-color);
    transition: transform 0.3s, box-shadow 0.3s;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.resource-card-large:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.resource-card-header {
    margin-bottom: 1.5rem;
}

.resource-card-large .icon-circle {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.resource-card-large h3 {
    font-size: 1.1rem;
    margin-bottom: 0;
}

.resource-card-large p {
    color: var(--text-muted);
    font-size: 0.9rem;
    flex-grow: 1;
    margin-bottom: 1.5rem;
}

/* FAQ Section */
.faq-section {
    padding: 5rem 2rem;
    max-width: 1000px;
    margin: 0 auto;
}

.faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 3rem 0;
}

@media(min-width: 768px) {
    .faq-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
}

.faq-item {
    border-bottom: 1px solid var(--border-color);
    padding: 1.2rem 0;
    cursor: pointer;
}

.faq-question {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
    color: var(--primary-color);
}

.faq-question i {
    transition: transform 0.3s;
}

.faq-contact {
    text-align: center;
    background-color: var(--icon-green-bg);
    padding: 1.5rem;
    border-radius: 50px;
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
    display: flex;
    width: fit-content;
}

.faq-contact p {
    margin: 0;
    color: var(--text-muted);
    font-size: 0.95rem;
}

.contact-team-link {
    color: var(--secondary-color);
    text-decoration: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* Form CTA Section */
.form-cta-section {
    padding: 5rem 2rem;
    background-color: var(--bg-white);
}

.form-cta-container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: #0B4232; /* Dark green matching image */
    border-radius: 20px;
    padding: 3rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    position: relative;
    overflow: hidden;
}

@media(min-width: 992px) {
    .form-cta-container {
        flex-direction: row;
        align-items: center;
        padding: 4rem;
    }
    .form-cta-text {
        flex: 1;
        padding-right: 2rem;
    }
    .form-cta-box {
        width: 450px;
    }
}

.form-cta-text h2 {
    color: white;
    text-align: left;
    font-size: 2.2rem;
    margin-bottom: 1rem;
}

.highlight-green-light {
    color: #4ade80; /* Light green text */
}

.form-cta-text p {
    color: rgba(255,255,255,0.8);
    font-size: 1rem;
    margin-bottom: 2rem;
    max-width: 450px;
}

.form-cta-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.cta-badge {
    background-color: rgba(255,255,255,0.1);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(255,255,255,0.2);
}

.cta-badge i {
    color: #4ade80;
}

.form-cta-box {
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    position: relative;
    z-index: 2;
}

.form-cta-box h3 {
    text-align: center;
    color: var(--secondary-color);
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
}

.demo-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-row {
    display: flex;
    gap: 1rem;
}

.form-row input, .form-row select {
    flex: 1;
    padding: 0.8rem 1rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.3s;
}

.form-row input:focus, .form-row select:focus {
    border-color: var(--secondary-color);
}

.phone-input-row select {
    flex: 0 0 100px;
}

.w-100 {
    width: 100%;
}

.arrow-drawing {
    position: absolute;
    bottom: 50px;
    left: 45%;
    transform: translateX(-50%);
    opacity: 0.5;
}


/* =========================================
   ENTREPRISES PAGE
   ========================================= */

/* Enterprise Hero */
.enterprise-hero {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.enterprise-header-top {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;
}

.enterprise-header-top p {
    color: var(--text-muted);
    font-size: 1.1rem;
}

.enterprise-layout {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

@media(min-width: 992px) {
    .enterprise-layout {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .e-features-left, .e-features-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .e-mockup-center {
        flex: 1.2;
        display: flex;
        justify-content: center;
    }
}

.e-feature-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.e-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.e-feature-text h4 {
    margin-bottom: 0.3rem;
    font-size: 1rem;
}

.e-feature-text p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

.e-mockup-center img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.e-whatsapp-box {
    display: flex;
    gap: 1rem;
    background-color: var(--icon-green-bg);
    padding: 1.5rem;
    border-radius: 12px;
    margin-top: 1rem;
}

.e-whatsapp-box i {
    font-size: 2rem;
}

.e-whatsapp-box strong {
    display: block;
    font-size: 0.95rem;
    color: var(--primary-color);
}

/* Integrations Powerful */
.integrations-powerful {
    padding: 5rem 2rem;
    background-color: var(--bg-white);
}

.integrations-full-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1000px;
    margin: 3rem auto;
}

@media(min-width: 600px) {
    .integrations-full-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(min-width: 900px) {
    .integrations-full-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.integration-card {
    text-align: center;
    padding: 2rem 1.5rem;
    border: 1px solid var(--border-color);
    border-radius: 16px;
    transition: transform 0.3s;
}

.integration-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.integration-card .icon-circle-bg {
    margin: 0 auto 1.5rem;
}

.integration-card h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
}

.integration-card p {
    font-size: 0.85rem;
    color: var(--text-muted);
}

/* Statistics Section */
.statistics-section {
    padding: 4rem 2rem;
    background-color: var(--bg-white);
    border-top: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
}

.stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

@media(min-width: 600px) {
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
@media(min-width: 992px) {
    .stats-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}

.stat-text h3 {
    font-size: 1.8rem;
    margin-bottom: 0;
    line-height: 1;
}

.stat-text span {
    display: block;
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--primary-color);
    margin-top: 0.3rem;
}

.stat-text small {
    display: block;
    font-size: 0.8rem;
    color: var(--text-muted);
}
"""

with open('c:/Users/pc_Sara/Desktop/centrelatio/style.css', 'a', encoding='utf-8') as f:
    f.write(css_content)

print("CSS appended.")
