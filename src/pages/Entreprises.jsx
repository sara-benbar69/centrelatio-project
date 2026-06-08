import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setPageMeta } from '../lib/seo';
import StatsSection from '../components/StatsSection';
import IntegrationsGrid from '../components/IntegrationsGrid';
import TestimonialsCarousel from '../components/TestimonialsCarousel';

function Entreprises() {
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
                <h1>Pour les entreprises, retailers<br /><span className="highlight-green">et institutions</span></h1>
                <p>Centralisez toutes vos conversations WhatsApp, collaborez en équipe et offrez une expérience client exceptionnelle.</p>
            </div>
            
            <div className="enterprise-layout">
                <div className="e-features-left">
                    <div className="e-feature-item">
                        <div className="e-icon icon-blue"><i className="fa-solid fa-inbox"></i></div>
                        <div className="e-feature-text">
                            <h4>Boîte de réception partagée</h4>
                            <p>Toutes vos conversations WhatsApp dans un seul tableau de bord.</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-green"><i className="fa-solid fa-users"></i></div>
                        <div className="e-feature-text">
                            <h4>Attribution & collaboration</h4>
                            <p>Attribuez les conversations et collaborez en temps réel avec votre équipe.</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-yellow"><i className="fa-solid fa-bolt"></i></div>
                        <div className="e-feature-text">
                            <h4>Réponses rapides</h4>
                            <p>Gagnez du temps avec des modèles de réponses et des FAQ pré-enregistrées.</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-purple"><i className="fa-solid fa-robot"></i></div>
                        <div className="e-feature-text">
                            <h4>Automatisation & notifications</h4>
                            <p>Automatisez les réponses, les notifications et les suivis pour ne rien manquer.</p>
                        </div>
                    </div>
                </div>
                
                <div className="e-mockup-center">
                    <img src="assets/dashboard.png" alt="Platform Dashboard" />
                </div>
                
                <div className="e-features-right">
                    <div className="e-feature-item">
                        <div className="e-icon icon-cyan"><i className="fa-solid fa-id-card"></i></div>
                        <div className="e-feature-text">
                            <h4>Profils clients 360°</h4>
                            <p>Retrouvez l'historique complet et centralisez toutes les données.</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-teal"><i className="fa-solid fa-chart-line"></i></div>
                        <div className="e-feature-text">
                            <h4>Statistiques avancées</h4>
                            <p>Suivez vos performances et mesurez la satisfaction client.</p>
                        </div>
                    </div>
                    <div id="securite" className="e-feature-item">
                        <div className="e-icon icon-blue"><i className="fa-solid fa-shield-halved"></i></div>
                        <div className="e-feature-text">
                            <h4>Sécurité & conformité</h4>
                            <p>Vos données sont protégées et conformes aux normes RGPD.</p>
                        </div>
                    </div>
                    <div className="e-feature-item">
                        <div className="e-icon icon-orange"><i className="fa-solid fa-headset"></i></div>
                        <div className="e-feature-text">
                            <h4>Multi-agents</h4>
                            <p>Travaillez à plusieurs sur le même compte WhatsApp Business.</p>
                        </div>
                    </div>
                    
                    <div className="e-whatsapp-box">
                        <i className="fa-brands fa-whatsapp icon-green"></i>
                        <div>
                            <strong>Tout est centralisé.</strong><br />
                            <strong>Tout est plus simple.</strong><br />
                            <strong className="highlight-green">Tout se passe sur WhatsApp.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        <IntegrationsGrid />

        <StatsSection />

        
        <section className="testimonials-row">
            <h2>Ils nous font <span className="highlight-green">confiance</span></h2>
            <TestimonialsCarousel testimonials={testimonials} itemsPerPageDesktop={3} />
        </section>

        
        <section className="final-cta-horizontal">
            <div className="cta-banner-inner gradient-bg">
                <div className="cta-text-row">
                    <div className="cta-icon-text">
                        <i className="fa-brands fa-whatsapp banner-large-icon"></i>
                        <div className="cta-banner-text-left">
                            <h2>Prêt à améliorer vos relations sur WhatsApp ?</h2>
                            <p>Rejoignez Centrelatio et offrez à vos clients l'expérience qu'ils méritent.</p>
                        </div>
                    </div>
                    <a href="#contact-form" className="btn btn-white"><i className="fa-brands fa-whatsapp icon-green"></i> Demander une démo maintenant</a>
                </div>
            </div>
        </section>

    
    </main>
  );
}

export default Entreprises;
