import { useEffect } from 'react'
import { Clock3, Heart, Settings, ShieldCheck, UsersRound } from 'lucide-react'
import { Icon } from '../components/Icons'
import { setPageMeta } from '../lib/seo'

function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'Centrelatio - Plateforme WhatsApp Business',
      description: 'Centralisez toutes les interactions clients sur WhatsApp avec une solution SaaS moderne et securisee.',
      url: 'https://www.centrelatio.com/',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
          currentObserver.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elementsToAnimate = document.querySelectorAll('.hero-text, .hero-image-side, .section-title, .card, .step, .integration-card, .stat-item, .pricing-card')
    elementsToAnimate.forEach((el) => {
      el.classList.add('fade-up-element')
      observer.observe(el)
    })

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main>
      <section className="hero hero-split">
        <div className="hero-text">
          <div className="hero-tag">PLATEFORME WHATSAPP BUSINESS</div>
          <h1>Le centre de toutes vos relations <br /><span className="highlight-green">sur WhatsApp</span></h1>
          <p className="hero-subtitle">Centrelatio met en relation vos clients et vos entreprises pour des échanges simples, rapides et efficaces.</p>

          <div className="hero-cta">
            <a href="#contact-form" className="btn btn-primary"><Icon name="whatsapp" /> Démarrer maintenant</a>
          </div>

          <div className="hero-features">
            <div className="feature-item"><Icon name="check-circle" /> 100% WhatsApp</div>
            <div className="feature-item"><Icon name="check-circle" /> Sans application</div>
            <div className="feature-item"><Icon name="check-circle" /> Réponse 24h/7</div>
            <div className="feature-item"><Icon name="check-circle" /> Securise</div>
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-graphics">
            <img src="/assets/hero-illustration.png" alt="Centrelatio Plateforme" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
          </div>
        </div>
      </section>

      <section className="use-cases" id="fonctionnalites">
        <h2 className="section-title">Toutes vos interactions,<br /><span className="highlight-green">centralisees sur WhatsApp</span></h2>
        <p className="section-subtitle">Un seul canal pour répondre à tous les besoins de vos clients et développer des relations durables.</p>

        <div className="cards-grid">
          <div className="card">
            <div className="icon icon-blue"><img src="/assets/faq.png" alt="FAQ" /></div>
            <h3>FAQ</h3>
            <p>Repondez instantanement aux questions frequentes.</p>
          </div>
          <div className="card">
            <div className="icon icon-green"><img src="/assets/Ecomerce.png" alt="Ecommerce" /></div>
            <h3>Produits & Services</h3>
            <p>Presentez vos offres et aidez vos clients a choisir.</p>
          </div>
          <div className="card">
            <div className="icon icon-blue"><img src="/assets/information.png" alt="information" /></div>
            <h3>Demande d'informations</h3>
            <p>Collectez facilement les demandes d'informations.</p>
          </div>
          <div className="card">
            <div className="icon icon-green"><img src="/assets/service.png" alt="service" /></div>
            <h3>Support / SAV</h3>
            <p>Assurez un support rapide et efficace.</p>
          </div>
          <div className="card">
            <div className="icon icon-orange"><img src="/assets/reclamation.png" alt="reclamation" /></div>
            <h3>Reclamations</h3>
            <p>Recevez et traitez les reclamations simplement.</p>
          </div>
          <div className="card">
            <div className="icon icon-yellow"><img src="/assets/light.png" alt="light" /></div>
            <h3>Boite a idees</h3>
            <p>Recueillez les idees et suggestions de vos clients.</p>
          </div>
          <div className="card">
            <div className="icon icon-purple"><img src="/assets/star.png" alt="star" /></div>
            <h3>Avis clients</h3>
            <p>Collectez les avis et ameliorez votre reputation.</p>
          </div>
          <div className="card">
            <div className="icon icon-cyan"><img src="/assets/gift.png" alt="gift" /></div>
            <h3>Fidélité & Récompenses</h3>
            <p>Créez des programmes de fidélité qui engagent.</p>
          </div>
          <div className="card">
            <div className="icon icon-pink"><img src="/assets/promotion..png" alt="promotion" /></div>
            <h3>Promotions</h3>
            <p>Envoyez des offres et promotions ciblees via WhatsApp.</p>
          </div>
          <div className="card">
            <div className="icon icon-teal"><img src="/assets/notification.png" alt="notification" /></div>
            <h3>Notifications</h3>
            <p>Informez vos clients en temps reel (commandes, alertes, etc.).</p>
          </div>
          <div className="card whatsapp-highlight-card">
            <div className="icon whatsapp-icon"><Icon name="whatsapp" /></div>
            <h3>Tout ça, depuis WhatsApp.</h3>
            <p>Sans application supplémentaire pour vos clients. Simple, rapide, efficace.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">Comment ca fonctionne ?</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-icon-wrapper"><img src="/assets/qr.png" alt="QR" /></div>
            <div className="step-content">
              <h3><span className="step-number">1</span> Connectez</h3>
              <p>Scannez le QR code ou cliquez sur le lien pour démarrer la conversation.</p>
            </div>
          </div>
          <div className="step-arrow"><i className="fa-solid fa-arrow-down"></i></div>
          <div className="step">
            <div className="step-icon-wrapper whatsapp-color"><img src="/assets/whatsap.png" alt="WhatsApp" /></div>
            <div className="step-content">
              <h3><span className="step-number">2</span> Échangez</h3>
              <p>Vos clients vous écrivent sur WhatsApp comme d'habitude.</p>
            </div>
          </div>
          <div className="step-arrow"><i className="fa-solid fa-arrow-down"></i></div>
          <div className="step">
            <div className="step-icon-wrapper"><img src="/assets/centraliser.png" alt="centraliser" /></div>
            <div className="step-content">
              <h3><span className="step-number">3</span> Centralisez</h3>
              <p>Centrelatio regroupe toutes les conversations dans un tableau de bord unique.</p>
            </div>
          </div>
          <div className="step-arrow"><i className="fa-solid fa-arrow-down"></i></div>
          <div className="step">
            <div className="step-icon-wrapper"><img src="/assets/diagrame.png" alt="Diagramme" /></div>
            <div className="step-content">
              <h3><span className="step-number">4</span> Gerez & Fidelisez</h3>
              <p>Répondez plus vite, satisfaites vos clients et développez votre relation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <h2 className="section-title text-left">Pourquoi choisir <span className="highlight-green">Centrelatio ?</span></h2>
        <ul className="why-choose-list">
          <li><UsersRound className="why-icon" />
            <div className="content"><strong>Améliorez l'expérience client</strong><p>Réponses rapides et personnalisées.</p></div>
          </li>
          <li><Clock3 className="why-icon" />
            <div className="content"><strong>Gagnez du temps</strong><p>Centralisation et automatisation des échanges.</p></div>
          </li>
          <li><Heart className="why-icon" />
            <div className="content"><strong>Boostez la fidélité</strong><p>Programmes, promotions et relation durable.</p></div>
          </li>
          <li><Settings className="why-icon" />
            <div className="content"><strong>Outils simples & puissants</strong><p>Tableau de bord intuitif et collaboration en équipe.</p></div>
          </li>
          <li><ShieldCheck className="why-icon" />
            <div className="content"><strong>Securite & conformite</strong><p>Vos donnees sont protegees et conformes.</p></div>
          </li>
        </ul>
      </section>

      <section className="final-cta gradient-bg">
        <h2>Prêt à transformer vos conversations en relations durables ?</h2>
        <p>Rejoignez Centrelatio et rapprochez-vous de vos clients, chaque jour.</p>
        <a href="#contact-form" className="btn btn-white"><Icon name="whatsapp" className="icon-green" /> Demander une démonstration</a>
        <span className="guarantee">Réponse rapide garantie</span>
      </section>
    </main>
  )
}

export default Home
