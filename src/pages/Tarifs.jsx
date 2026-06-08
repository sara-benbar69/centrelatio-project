import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LockKeyhole, ShieldCheck, ServerCog, RefreshCcw, Shield } from 'lucide-react';
import { setPageMeta } from '../lib/seo';
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
            <h1>Demandez votre <span className="highlight-green">devis personnalisé</span></h1>
            <p className="section-subtitle">Recevez une proposition adaptée à votre organisation, vos besoins et votre volume de conversations WhatsApp.</p>
            
            <div className="pricing-toggle">
                <button
                    type="button"
                    className={`toggle-btn ${billing === 'monthly' ? 'active' : 'inactive'}`}
                    onClick={() => setBilling('monthly')}
                >
                    Mensuel <br /><small>Sans engagement</small>
                </button>
                <button
                    type="button"
                    className={`toggle-btn ${billing === 'yearly' ? 'active' : 'inactive'}`}
                    onClick={() => setBilling('yearly')}
                >
                    Annuel <br /><small>Économisez 20%</small>
                </button>
            </div>
            {billing === 'yearly' && (
                <p className="pricing-billing-note">
                    Facturation annuelle avec 20% de réduction inclus.
                </p>
            )}
        </section>

        
        <section className="pricing-cards-section">
            <div className="pricing-cards">
                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-blue"><i className="fa-regular fa-paper-plane"></i></div>
                        <div>
                            <h3>Starter</h3>
                            <p>Pour les petites équipes</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.starter.amount}</span> <span className="currency">{currentPrices.starter.currency}</span>
                    </div>
                    <p className="card-desc">Recevez une proposition rapide adaptée aux petites équipes et à vos premiers échanges WhatsApp.</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> 1 utilisateur</li>
                        <li><i className="fa-solid fa-check icon-green"></i> 1 numéro WhatsApp</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Réponses rapides</li>
                        <li><i className="fa-solid fa-check icon-green"></i> FAQ & Messages prédéfinis</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Statistiques de base</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary">Demander un devis</a>
                </div>

                
                <div className="pricing-card popular">
                    <div className="popular-badge">LE PLUS POPULAIRE</div>
                    <div className="card-header">
                        <div className="icon-circle icon-blue"><i className="fa-solid fa-user-group"></i></div>
                        <div>
                            <h3>Growth</h3>
                            <p>Pour les équipes en croissance</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.growth.amount}</span> <span className="currency">{currentPrices.growth.currency}</span>
                    </div>
                    <p className="card-desc">Obtenez un plan conçu pour accompagner votre croissance et vos volumes WhatsApp.</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> 3 utilisateurs</li>
                        <li><i className="fa-solid fa-check icon-green"></i> 3 numéros WhatsApp</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Toutes les fonctionnalités Starter</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Boîte de réception partagée</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Automatisations & Notifications</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Statistiques avancées</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-primary">Obtenir mon devis</a>
                </div>

                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-green"><i className="fa-regular fa-building"></i></div>
                        <div>
                            <h3>Business</h3>
                            <p>Pour les entreprises</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount">{currentPrices.business.amount}</span> <span className="currency">{currentPrices.business.currency}</span>
                    </div>
                    <p className="card-desc">Recevez une proposition structurée pour des opérations WhatsApp à grande échelle.</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> Utilisateurs illimités</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Numéros WhatsApp illimités</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Toutes les fonctionnalités Growth</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Attribution & Rôles</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Intégrations CRM & API</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Rapports avancés</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary green-border">Demander un devis</a>
                </div>

                
                <div className="pricing-card">
                    <div className="card-header">
                        <div className="icon-circle icon-green"><i className="fa-solid fa-shield-halved"></i></div>
                        <div>
                            <h3>Enterprise</h3>
                            <p>Pour les grandes organisations</p>
                        </div>
                    </div>
                    <div className="price">
                        <span className="amount text-large">Sur devis</span>
                    </div>
                    <p className="card-desc">Recevez une proposition sur-mesure avec accompagnement, SLA et sécurité avancée.</p>
                    <ul className="features-list">
                        <li><i className="fa-solid fa-check icon-green"></i> Tout du plan Business</li>
                        <li><i className="fa-solid fa-check icon-green"></i> SLA & Support prioritaire</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Intégrations sur-mesure</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Formation & Accompagnement</li>
                        <li><i className="fa-solid fa-check icon-green"></i> Sécurité & Conformité avancées</li>
                    </ul>
                    <a href="#contact-form" className="btn btn-secondary green-border">Recevoir une proposition</a>
                </div>
            </div>
            
            <div className="pricing-footer-text">
                <p><i className="fa-solid fa-circle-info icon-green"></i> Tous les plans incluent : 100% WhatsApp officiel • Sécurité des données • Support 24h/7</p>
                {billing === 'yearly' && <p className="pricing-footer-saving">Vous économisez 20% par rapport au paiement mensuel.</p>}
            </div>
        </section>

        
        <section className="platform-journey bg-light-section">
            <div className="journey-header">
                <div className="j-header-text">
                    <h2>Une plateforme complète <br />pour des <span className="highlight-green">relations durables</span></h2>
                    <p>Centrelatio vous aide à chaque étape de la relation client, de la première question jusqu'à la fidélisation.</p>
                </div>
                
                <div className="journey-steps">
                    <div className="j-step">
                        <div className="j-icon icon-green"><i className="fa-solid fa-comment-dots"></i></div>
                        <h4>Attirer</h4>
                        <p>De nouveaux clients</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-blue"><i className="fa-solid fa-comment-medical"></i></div>
                        <h4>Engager</h4>
                        <p>Des conversations utiles</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-purple"><i className="fa-solid fa-heart"></i></div>
                        <h4>Satisfaire</h4>
                        <p>Avec un support efficace</p>
                    </div>
                    <div className="j-line"></div>
                    <div className="j-step">
                        <div className="j-icon icon-orange"><i className="fa-solid fa-star"></i></div>
                        <h4>Fidéliser</h4>
                        <p>Et créer de l'engagement</p>
                    </div>
                </div>
            </div>
        </section>

        
        <section className="security-banner-wrapper">
            <div className="security-banner dark-blue-bg">
                <div className="sec-left">
                    <div className="sec-icon-large"><Shield /></div>
                    <div className="sec-text">
                        <h3><span className="highlight-green">Sécurité</span> et conformité au cœur de notre solution</h3>
                        <p>Vos données et celles de vos clients sont protégées avec les plus hauts standards de sécurité et conformes aux réglementations en vigueur.</p>
                    </div>
                </div>
                <div className="sec-right">
                    <div className="sec-item"><LockKeyhole /> <span>Chiffrement<br />des données</span></div>
                    <div className="sec-item"><ShieldCheck /> <span>Conforme<br />RGPD</span></div>
                    <div className="sec-item"><ServerCog /> <span>Hébergement<br />sécurisé</span></div>
                    <div className="sec-item"><RefreshCcw /> <span>Sauvegardes<br />quotidiennes</span></div>
                </div>
            </div>
        </section>

        
        {showTestimonials && (
          <section className="testimonials-row">
              <h2>Ils nous font <span className="highlight-green">confiance</span></h2>
              <TestimonialsCarousel testimonials={testimonials} itemsPerPageDesktop={3} />
          </section>
        )}

        
        <section className="final-cta-horizontal">
            <div className="cta-banner-inner gradient-bg">
                <div className="cta-text-row">
                    <div className="cta-icon-text">
                        <i className="fa-brands fa-whatsapp banner-large-icon"></i>
                        <div className="cta-banner-text-left">
                            <h2>Prêt à transformer vos conversations en relations durables ?</h2>
                            <p>Rejoignez Centrelatio et rapprochez-vous de vos clients, chaque jour.</p>
                        </div>
                    </div>
                    <a href="#contact-form" className="btn btn-white"><i className="fa-brands fa-whatsapp icon-green"></i> Demander une démonstration</a>
                </div>
            </div>
        </section>

    
    </main>
  );
}

export default Tarifs;
