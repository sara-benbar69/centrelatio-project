import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '../hooks/useMediaQuery';
import '../i18n';

function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const footerGroups = t('footer.groups', { returnObjects: true });
  const legalLinks = t('footer.legalLinks', { returnObjects: true });

  const footerBrand = (
    <div className="footer-brand footer-logo">
      <img
        src="/assets/logo-white.png"
        alt="Centrelatio"
        className="footer-logo-img"
      />
      <p>{t('footer.brandDescription')}</p>
      <div className="social-links-left">
        <a href="#" aria-label={t('footer.whatsappLabel')}>
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="#" aria-label={t('footer.facebookLabel')}>
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href="#" aria-label={t('footer.linkedinLabel')}>
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="#" aria-label={t('footer.instagramLabel')}>
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
          <h4>{t('footer.contactTitle')}</h4>
          <a href={`mailto:${t('footer.emailLabel')}`}>
            <i className="fa-regular fa-envelope"></i> {t('footer.emailLabel')}
          </a>
          <a href={`tel:+212600000000`}>
            <i className="fa-solid fa-phone"></i> {t('footer.phoneLabel')}
          </a>
          <span className="footer-contact-line">
            <i className="fa-solid fa-location-dot"></i> {t('footer.locationLabel')}
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
          <summary>{t('footer.contactTitle')}</summary>
          <div>
            <a href={`mailto:${t('footer.emailLabel')}`}>{t('footer.emailLabel')}</a>
            <a href={`tel:+212600000000`}>{t('footer.phoneLabel')}</a>
            <Link to="/#contact-form">{t('footer.locationLabel')}</Link>
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
          {t('footer.copyrightPrefix')} <strong>Centrelatio</strong>{' '}
          <span className="by-digishare">{t('footer.copyrightBy')}</span>. {t('footer.copyrightSuffix')}
        </p>
        <div className="legal-links">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <a href="#" className="floating-whatsapp" aria-label={t('footer.whatsappLabel')}>
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </footer>
  );
}

export default Footer;
