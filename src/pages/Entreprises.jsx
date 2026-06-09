import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import { setPageMeta } from '../lib/seo';
import StatsSection from '../components/StatsSection';
import IntegrationsGrid from '../components/IntegrationsGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

function Entreprises() {
    const { t } = useTranslation()
  const testimonials = [
    {
      quote: "Centrelatio a transformé notre relation client. Nous répondons plus vite et nos clients sont plus satisfaits que jamais.",
      author: 'Youssef B.',
      role: 'Responsable Service Client',
      company: 'Retail',
    },
    {
      quote: "Une solution simple, puissante et 100% sur WhatsApp. Notre équipe ne peut plus s'en passer !",
      author: 'Salma K.',
      role: 'Directrice Marketing',
      company: 'E-commerce',
    },
    {
      quote: "La centralisation des échanges et les automatisations nous font gagner un temps précieux au quotidien.",
      author: 'Mehdi T.',
      role: 'Responsable Support',
      company: 'SaaS',
    },
    {
      quote: "Avec Centrelatio, nos demandes clients sont traitées plus vite et sans perte d'information.",
      author: 'Anissa M.',
      role: 'Responsable Commerciale',
      company: 'Distribution',
    },
    {
      quote: "L'outil est très intuitif et le suivi des conversations est maintenant clair pour toute l'équipe.",
      author: 'Rachid L.',
      role: 'Directeur des Opérations',
      company: 'Retail',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Centrelatio pour entreprises — WhatsApp Business',
      description: 'Une solution WhatsApp Business pour retailers, institutions et équipes d\'entreprise visant à centraliser la relation client.',
      url: 'https://www.centrelatio.com/entreprises',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })
  }, []);

  return (
    <main className="page-main">
      
        
        <section id="cas-usage" className="enterprise-hero">
            <div className="enterprise-header-top">
                <h1>{t('entreprises.header.titlePart1')}<br /><span className="highlight-green">{t('entreprises.header.titleHighlight')}</span></h1>
                <p>{t('entreprises.header.subtitle')}</p>
            </div>
            
            <div className="enterprise-layout">
                <div className="e-features-left">
                    <div className="e-feature-item">
                        <div className="e-icon icon-blue"><i className="fa-solid fa-inbox"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.inbox.title')}</h4>
                            <p>{t('entreprises.features.inbox.text')}</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-green"><i className="fa-solid fa-users"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.assign.title')}</h4>
                            <p>{t('entreprises.features.assign.text')}</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-yellow"><i className="fa-solid fa-bolt"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.quickReplies.title')}</h4>
                            <p>{t('entreprises.features.quickReplies.text')}</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-purple"><i className="fa-solid fa-robot"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.automation.title')}</h4>
                            <p>{t('entreprises.features.automation.text')}</p>
                        </div>
                    </div>
                </div>
                
                <div className="e-mockup-center">
                    <img src="assets/dashboard.png" alt={t('entreprises.mockup.alt')} />
                </div>
                
                <div className="e-features-right">
                    <div className="e-feature-item">
                        <div className="e-icon icon-cyan"><i className="fa-solid fa-id-card"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.profiles.title')}</h4>
                            <p>{t('entreprises.features.profiles.text')}</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-teal"><i className="fa-solid fa-chart-line"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.stats.title')}</h4>
                            <p>{t('entreprises.features.stats.text')}</p>
                        </div>
                    </div>
                    <div id="securite" className="e-feature-item">
                        <div className="e-icon icon-blue"><i className="fa-solid fa-shield-halved"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.security.title')}</h4>
                            <p>{t('entreprises.features.security.text')}</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-orange"><i className="fa-solid fa-headset"></i></div>
                        <div className="e-feature-text">
                            <h4>{t('entreprises.features.multiAgents.title')}</h4>
                            <p>{t('entreprises.features.multiAgents.text')}</p>
                        </div>
                    </div>
                    
                    <div className="e-whatsapp-box">
                        <i className="fa-brands fa-whatsapp icon-green"></i>
                        <div>
                            <strong>{t('entreprises.box.line1')}</strong><br />
                            <strong>{t('entreprises.box.line2')}</strong><br />
                            <strong className="highlight-green">{t('entreprises.box.line3')}</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <IntegrationsGrid />

        <StatsSection />

        
        <section className="testimonials-row">
            <h2>{t('entreprises.testimonials.titlePart1')} <span className="highlight-green">{t('entreprises.testimonials.titleHighlight')}</span></h2>
            <TestimonialsCarousel testimonials={testimonials} itemsPerPageDesktop={3} />
        </section>

        
        <section className="final-cta-horizontal">
            <div className="cta-banner-inner gradient-bg">
                <div className="cta-text-row">
                    <div className="cta-icon-text">
                        <i className="fa-brands fa-whatsapp banner-large-icon"></i>
                        <div className="cta-banner-text-left">
                            <h2>{t('entreprises.finalCta.title')}</h2>
                            <p>{t('entreprises.finalCta.text')}</p>
                        </div>
                    </div>
                    <a href="#contact-form" className="btn btn-white"><i className="fa-brands fa-whatsapp icon-green"></i> {t('entreprises.finalCta.button')}</a>
                </div>
            </div>
        </section>

    
    </main>
  );
}

export default Entreprises;
