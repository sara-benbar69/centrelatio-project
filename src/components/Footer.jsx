import { Link } from 'react-router-dom';
import { useMediaQuery } from '../hooks/useMediaQuery';

const footerGroups = [
  {
    title: 'Plateforme',
    links: [
      { label: 'Fonctionnalites', to: '/#fonctionnalites' },
      { label: 'Tarifs', to: '/tarifs' },
      { label: 'Integrations', to: '/entreprises#integrations' },
      { label: 'Securite', to: '/entreprises#securite' },
    ],
  },
  {
    title: 'Pour les entreprises',
    links: [
      { label: 'Aperçu', to: '/entreprises' },
      { label: "Cas d'usage", to: '/entreprises#cas-usage' },
      { label: 'Ressources', to: '/ressources' },
      { label: 'FAQ', to: '/ressources#faq' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Blog', to: '/ressources' },
      { label: 'Guides', to: '/ressources' },
      { label: "Centre d'aide", to: '/ressources' },
    ],
  },
];

function Footer() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const footerBrand = (
    <div className="footer-brand footer-logo">
      <img
        src="/assets/logo-white.png"
        alt="Centrelatio"
        className="footer-logo-img"
      />
      <p>
        La plateforme WhatsApp qui met en relation les clients
        avec les entreprises, retailers et institutions.
      </p>
      <div className="social-links-left">
        <a href="#" aria-label="WhatsApp">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#" aria-label="Facebook">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label="LinkedIn">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label="Instagram">
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );

  const desktopFooter = (
    <>
      {footerBrand}
      <div className="footer-links-grid">
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h4>{group.title}</h4>
            {group.links.map((link) => (
              <Link key={link.label} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
        <div>
          <h4>Contact</h4>
          <a href="mailto:contact@centrelatio.com">
            <i className="fa-regular fa-envelope"></i> contact@centrelatio.com
          </a>
          <a href="tel:+212600000000">
            <i className="fa-solid fa-phone"></i> +212 6 00 00 00 00
          </a>
          <span className="footer-contact-line">
            <i className="fa-solid fa-location-dot"></i> Casablanca, Maroc
          </span>
        </div>
      </div>
    </>
  );

  const mobileFooter = (
    <div className="mobile-footer">
      {footerBrand}
      <div className="footer-mobile-accordion">
        {footerGroups.map((group) => (
          <details key={group.title}>
            <summary>{group.title}</summary>
            <div>
              {group.links.map((link) => (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </div>
          </details>
        ))}
        <details>
          <summary>Contact</summary>
          <div>
            <a href="mailto:contact@centrelatio.com">contact@centrelatio.com</a>
            <a href="tel:+212600000000">+212 6 00 00 00 00</a>
            <Link to="/#contact-form">Casablanca, Maroc</Link>
          </div>
        </details>
      </div>
    </div>
  );

  return (
    <footer className="site-footer dark-blue-bg">
      <div className="footer-top">
        {isMobile ? mobileFooter : desktopFooter}
      </div>

      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2026 <strong>Centrelatio</strong>{' '}
          <span className="by-digishare">by Digishare</span>. Tous droits réservés.
        </p>
        <div className="legal-links">
          <a href="#">Mentions legales</a>
          <a href="#">Politique de confidentialite</a>
          <a href="#">Conditions d'utilisation</a>
        </div>
      </div>

      <a href="#" className="floating-whatsapp" aria-label="WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
}

export default Footer;
