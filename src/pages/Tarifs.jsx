import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LockKeyhole, ShieldCheck, ServerCog, RefreshCcw, Shield } from 'lucide-react';
import { setPageMeta } from '../lib/seo';
import { useTranslation } from 'react-i18next'
import TestimonialsCarousel from '../components/TestimonialsCarousel';

const prices = {
  monthly: {
    starter: { amount: '299', currency: 'MAD /mois' },
    growth: { amount: '699', currency: 'MAD /mois' },
    business: { amount: '1 499', currency: 'MAD /mois' },
  },
  yearly: {
    starter: { amount: '2 870', currency: 'MAD /an' },
    growth: { amount: '6 710', currency: 'MAD /an' },
    business: { amount: '14 390', currency: 'MAD /an' },
  },
}

function Tarifs({ showTestimonials = true }) {
    const { t } = useTranslation()
    const [billing, setBilling] = useState('monthly');
  const currentPrices = prices[billing];
  const testimonials = [
    {
      quote: "Centrelatio a révolutionné notre relation client. Nous avons réduit notre temps de réponse et augmenté la satisfaction de nos clients.",
      author: 'Youssef B.',
      role: 'Responsable Relation Client',
      company: 'Retail',
    },
    {
      quote: "Une plateforme WhatsApp complète et facile à utiliser. Nos équipes collaborent mieux et nos clients nous remercient chaque jour !",
      author: 'Imane R.',
      role: 'Directrice Marketing',
      company: 'E-commerce',
    },
    {
      quote: "Le support est excellent et les fonctionnalités répondent parfaitement à nos besoins. Je recommande Centrelatio.",
      author: 'Mehdi T.',
      role: 'Directeur des Opérations',
      company: 'Institution',
    },
    {
      quote: "L'adoption a été immédiate et la centralisation sur WhatsApp nous a fait gagner en clarté.",
      author: 'Sara B.',
      role: 'Responsable Expérience Client',
      company: 'B2B',
    },
    {
      quote: "Le support est réactif et l'outil est très intuitif, notre équipe est conquise.",
      author: 'Nadia F.',
      role: 'Responsable Relation Client',
      company: 'Service',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    setPageMeta({
      title: 'Tarifs Centrelatio — Forfaits WhatsApp Business',
      description: 'Comparez les formules Centrelatio et choisissez la solution WhatsApp adaptée à votre organisation.',
      url: 'https://www.centrelatio.com/tarifs',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })
  }, []);

  return (
    <main className="page-main">
      
        
        <section className="pricing-header">
            <h1>{t('tarifs.header.titlePart1')} <span className="highlight-green">{t('tarifs.header.titleHighlight')}</span></h1>
            <p className="section-subtitle">{t('tarifs.header.subtitle')}</p>
            
            <div className="pricing-toggle">
                <button
                    type="button"
                    className={`toggle-btn ${billing === 'monthly' ? 'active' : 'inactive'}`}
                    onClick={() => setBilling('monthly')}
                >
                    {t('tarifs.toggle.monthlyLabel')} <br /><small>{t('tarifs.toggle.monthlyNote')}</small>
                </button>
                <button
                    type="button"
                    className={`toggle-btn ${billing === 'yearly' ? 'active' : 'inactive'}`}
                    onClick={() => setBilling('yearly')}
                >
                    {t('tarifs.toggle.yearlyLabel')} <br /><small>{t('tarifs.toggle.yearlyNote')}</small>
                </button>
            </div>
            {billing === 'yearly' && (
                <p className="pricing-billing-note">{t('tarifs.billingNote')}</p>
            )}
        </section>

        
        <section className="pricing-cards-section">
            <div className="pricing-cards">
                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-blue"><i className="fa-regular fa-paper-plane"></i></div>
                        <div>
                            <h3>{t('tarifs.plans.starter.title')}</h3>
                            <p>{t('tarifs.plans.starter.subtitle')}</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.starter.amount}</span> <span className="currency">{currentPrices.starter.currency}</span>
                    </div>
                    <p className="card-desc">{t('tarifs.plans.starter.desc')}</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.starter.features.0')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.starter.features.1')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.starter.features.2')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.starter.features.3')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.starter.features.4')}</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary">Demander un devis</a>
                </div>

                
                <div className="pricing-card popular">
                    <div className="popular-badge">LE PLUS POPULAIRE</div>
                    <div className="card-header">
                        <div className="icon-circle icon-blue"><i className="fa-solid fa-user-group"></i></div>
                        <div>
                            <h3>{t('tarifs.plans.growth.title')}</h3>
                            <p>{t('tarifs.plans.growth.subtitle')}</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.growth.amount}</span> <span className="currency">{currentPrices.growth.currency}</span>
                    </div>
                    <p className="card-desc">{t('tarifs.plans.growth.desc')}</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.0')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.1')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.2')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.3')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.4')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.growth.features.5')}</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-primary">Obtenir mon devis</a>
                </div>

                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-green"><i className="fa-regular fa-building"></i></div>
                        <div>
                            <h3>{t('tarifs.plans.business.title')}</h3>
                            <p>{t('tarifs.plans.business.subtitle')}</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.business.amount}</span> <span className="currency">{currentPrices.business.currency}</span>
                    </div>
                    <p className="card-desc">{t('tarifs.plans.business.desc')}</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.0')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.1')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.2')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.3')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.4')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.business.features.5')}</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary green-border">Demander un devis</a>
                </div>

                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-green"><i className="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h3>{t('tarifs.plans.enterprise.title')}</h3>
                            <p>{t('tarifs.plans.enterprise.subtitle')}</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount text-large">Sur devis</span>
                    </div>
                    <p className="card-desc">{t('tarifs.plans.enterprise.desc')}</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.enterprise.features.0')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.enterprise.features.1')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.enterprise.features.2')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.enterprise.features.3')}</li>
                        <li><i className="fa-solid fa-check icon-green"></i> {t('tarifs.plans.enterprise.features.4')}</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary green-border">Recevoir une proposition</a>
                </div>
            </div>
            
            <div className="pricing-footer-text">
                    <p><i className="fa-solid fa-circle-info icon-green"></i> {t('tarifs.footer.includes')}</p>
                {billing === 'yearly' && <p className="pricing-footer-saving">Vous économisez 20% par rapport au paiement mensuel.</p>}
            </div>
        </section>

        
        <section className="platform-journey bg-light-section">
            <div className="journey-header">
                <div className="j-header-text">
                    <h2>{t('tarifs.journey.titlePart1')} <br />pour des <span className="highlight-green">{t('tarifs.journey.titleHighlight')}</span></h2>
                    <p>{t('tarifs.journey.subtitle')}</p>
                </div>
                
                <div className="journey-steps">
                    <div className="j-step">
                        <div className="j-icon icon-green"><i className="fa-solid fa-comment-dots"></i></div>
                        <h4>{t('tarifs.journey.steps.attract.title')}</h4>
                        <p>{t('tarifs.journey.steps.attract.text')}</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-blue"><i className="fa-solid fa-comment-medical"></i></div>
                        <h4>{t('tarifs.journey.steps.engage.title')}</h4>
                        <p>{t('tarifs.journey.steps.engage.text')}</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-purple"><i className="fa-solid fa-heart"></i></div>
                        <h4>{t('tarifs.journey.steps.satisfy.title')}</h4>
                        <p>{t('tarifs.journey.steps.satisfy.text')}</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-orange"><i className="fa-solid fa-star"></i></div>
                        <h4>{t('tarifs.journey.steps.loyalize.title')}</h4>
                        <p>{t('tarifs.journey.steps.loyalize.text')}</p>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="security-banner-wrapper">
            <div className="security-banner dark-blue-bg">
                <div className="sec-left">
                    <div className="sec-icon-large"><Shield /></div>
                    <div className="sec-text">
                        <h3><span className="highlight-green">{t('tarifs.security.titleHighlight')}</span> {t('tarifs.security.titleRest')}</h3>
                        <p>{t('tarifs.security.description')}</p>
                    </div>
                </div>
                <div className="sec-right">
                    <div className="sec-item"><LockKeyhole /> <span>{t('tarifs.security.items.encryption')}</span></div>
                    <div className="sec-item"><ShieldCheck /> <span>{t('tarifs.security.items.rgpd')}</span></div>
                    <div className="sec-item"><ServerCog /> <span>{t('tarifs.security.items.hosting')}</span></div>
                    <div className="sec-item"><RefreshCcw /> <span>{t('tarifs.security.items.backups')}</span></div>
                </div>
            </div>
        </section>

        
        {showTestimonials && (
          <section className="testimonials-row">
              <h2>{t('tarifs.testimonials.titlePart1')} <span className="highlight-green">{t('tarifs.testimonials.titleHighlight')}</span></h2>
              <TestimonialsCarousel testimonials={testimonials} itemsPerPageDesktop={3} />
          </section>
        )}

        
        <section className="final-cta-horizontal">
            <div className="cta-banner-inner gradient-bg">
                <div className="cta-text-row">
                    <div className="cta-icon-text">
                        <i className="fa-brands fa-whatsapp banner-large-icon"></i>
                        <div className="cta-banner-text-left">
                            <h2>{t('tarifs.finalCta.titlePart1')}</h2>
                            <p>{t('tarifs.finalCta.text')}</p>
                        </div>
                    </div>
                    <a href="#contact-form" className="btn btn-white"><i className="fa-brands fa-whatsapp icon-green"></i> {t('tarifs.finalCta.button')}</a>
                </div>
            </div>
        </section>

    
    </main>
  );
}

export default Tarifs;
