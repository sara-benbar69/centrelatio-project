import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { trackEvent } from '../lib/analytics'
import { setPageMeta } from '../lib/seo'

const resources = [
  {
    icon: 'fa-regular fa-file-lines',
    iconClass: 'icon-blue',
    title: 'Guides pratiques',
    text: 'Des guides simples pour mieux utiliser WhatsApp Business et structurer votre relation client.',
    link: 'Lire les guides',
  },
  {
    icon: 'fa-solid fa-video',
    iconClass: 'icon-green',
    title: 'Webinaires',
    text: 'Des sessions en ligne pour decouvrir les bonnes pratiques et poser vos questions a nos experts.',
    link: 'Voir les webinaires',
  },
  {
    icon: 'fa-regular fa-newspaper',
    iconClass: 'icon-yellow',
    title: 'Blog',
    text: "Conseils, tendances et retours d'expérience pour développer une relation client durable.",
    link: 'Lire le blog',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    iconClass: 'icon-purple',
    title: 'Bonnes pratiques',
    text: 'Des méthodes concrètes pour répondre plus vite, fidéliser et transformer chaque conversation.',
    link: 'Explorer',
  },
]

const faqCategories = [
  {
    category: "À propos de Centrelatio",
    items: [
      {
        q: "Qu'est-ce que Centrelatio ?",
        a: `Centrelatio est une plateforme de relation client sur WhatsApp qui permet aux entreprises, retailers et institutions de centraliser leurs échanges avec leurs clients, prospects et usagers.

          Selon vos besoins, Centrelatio peut être déployé sur votre propre compte WhatsApp Business Platform ou via le Portail Client Mutualisé Centrelatio, permettant un démarrage rapide sans création immédiate de compte WhatsApp API.`,
      },
      {
        q: "À qui s'adresse Centrelatio ?",
        a: `Centrelatio s'adresse aux :

        • Retailers
        • Banques
        • Assurances
        • Établissements de santé
        • Administrations
        • Établissements scolaires
        • Hôtels
        • E-commerçants
        • Réseaux de franchises
        • Associations

       Toute organisation souhaitant améliorer sa relation client sur WhatsApp.`,
      },
      {
        q: "Faut-il installer une application pour utiliser Centrelatio ?",
        a: `Non.

Vos clients utilisent simplement WhatsApp, sans téléchargement supplémentaire.

Que vous utilisiez votre propre compte WhatsApp Business Platform ou le Portail Client Mutualisé Centrelatio, l'expérience reste identique pour l'utilisateur final.`,
      },
      {
        q: "Pourquoi utiliser WhatsApp comme canal de relation client ?",
        a: `WhatsApp est aujourd'hui l'un des canaux les plus utilisés au monde.

Il offre :

• Des taux d'ouverture très élevés
• Une expérience familière pour les utilisateurs
• Des échanges instantanés
• Une forte adoption sur mobile`,
      },
      {
        q: "Pourquoi ne pas utiliser simplement un téléphone WhatsApp ?",
        a: `Parce que Centrelatio permet :

• L'automatisation
• La collaboration
• Le suivi des demandes
• Les statistiques
• Les enquêtes
• Les réclamations
• Les notifications
• Les intégrations métiers

Tout en conservant la simplicité de WhatsApp.`,
      },
      {
        q: "Quelle différence entre Centrelatio et un chatbot ?",
        a: `Centrelatio n'est pas uniquement un chatbot.

C'est une plateforme complète de relation client qui combine :

• Automatisation
• Collaboration humaine
• Notifications
• Support
• Réclamations
• Fidélité
• Intégrations métiers

avec la possibilité de démarrer rapidement via le Portail Client Mutualisé ou d'évoluer vers un déploiement entièrement dédié.`,
      },
    ],
  },

  {
    category: "Fonctionnalités",
    items: [
      {
        q: "Que peuvent faire mes clients via Centrelatio ?",
        a: `Vos clients peuvent :

• Poser des questions
• Découvrir vos produits et services
• Demander des informations
• Faire une réclamation
• Solliciter le support
• Donner leur avis
• Participer à une enquête
• S'inscrire à un programme de fidélité
• Recevoir des notifications
• Demander un rendez-vous

Ces parcours peuvent être déployés aussi bien dans le Portail Client Mutualisé que dans un environnement dédié.`,
      },
      {
        q: "Puis-je présenter mes produits et services sur WhatsApp ?",
        a: `Oui.

Centrelatio permet de créer des parcours conversationnels guidés pour présenter vos produits, services, offres et catalogues.

Cette fonctionnalité est disponible dès le Portail Client Mutualisé, ce qui permet de tester rapidement l'intérêt du canal WhatsApp avant un déploiement complet.`,
      },
      {
        q: "Puis-je automatiser certaines réponses ?",
        a: `Oui.

Vous pouvez automatiser :

• FAQ
• Orientation des demandes
• Qualification de prospects
• Enquêtes de satisfaction
• Réclamations
• Notifications
• Programmes de fidélité simples

Ces automatisations sont disponibles dès le Portail Client Mutualisé.`,
      },
      {
        q: "Puis-je transférer une conversation à un conseiller ?",
        a: `Oui, lorsque Centrelatio est déployé sur votre propre compte WhatsApp Business Platform.

Le Portail Client Mutualisé est principalement conçu pour les parcours automatisés et ne propose pas de Live Chat direct avec vos équipes.`,
      },
      {
        q: "Puis-je gérer plusieurs collaborateurs ?",
        a: `Oui.

Avec un déploiement dédié, plusieurs utilisateurs peuvent collaborer sur les conversations, avec différents rôles et niveaux d'accès.`,
      },
    ],
  },

  {
    category: "Support & Réclamations",
    items: [
      {
        q: "Puis-je gérer les réclamations clients ?",
        a: `Oui.

Centrelatio permet de mettre en place des parcours dédiés aux réclamations.

Dans le Portail Client Mutualisé, les réclamations peuvent être collectées et qualifiées automatiquement.

Dans un déploiement dédié, elles peuvent également être assignées, suivies et traitées par vos équipes.`,
      },
      {
        q: "Puis-je suivre l'historique complet d'un client ?",
        a: `Oui.

Le déploiement dédié offre une vision complète des interactions et de l'historique client.`,
      },
      {
        q: "Puis-je mesurer la satisfaction client ?",
        a: `Oui.

Centrelatio permet de déployer :

• Sondages
• Enquêtes de satisfaction
• Collecte d'avis

Ces fonctionnalités sont également disponibles dans le Portail Client Mutualisé.`,
      },
    ],
  },

  {
    category: "Marketing & Fidélité",
    items: [
      {
        q: "Puis-je envoyer des promotions sur WhatsApp ?",
        a: `Oui.

Vous pouvez envoyer des campagnes promotionnelles conformément aux règles de WhatsApp Business Platform.`,
      },
      {
        q: "Puis-je créer un programme de fidélité ?",
        a: `Oui.

Centrelatio permet de communiquer :

• Soldes de points
• Récompenses
• Offres personnalisées
• Avantages membres

Des versions simplifiées peuvent être mises en œuvre via le Portail Client Mutualisé.`,
      },
      {
        q: "Puis-je segmenter mes contacts ?",
        a: `Oui.

Le déploiement dédié permet des segmentations avancées et des campagnes ciblées.`,
      },
    ],
  },

  {
    category: "Notifications",
    items: [
      {
        q: "Quels types de notifications puis-je envoyer ?",
        a: `Par exemple :

• Confirmation de commande
• Confirmation de rendez-vous
• Rappel de rendez-vous
• Statut de livraison
• Paiement reçu
• Renouvellement d'abonnement
• Alertes importantes
• Documents disponibles`,
      },
      {
        q: "Les notifications sont-elles automatiques ?",
        a: `Oui.

Elles peuvent être déclenchées par vos systèmes ou intégrations métiers.`,
      },
    ],
  },

  {
    category: "Intégrations",
    items: [
      {
        q: "Centrelatio peut-il se connecter à mon CRM ?",
        a: `Oui.

Le déploiement dédié permet des intégrations avec :

• Salesforce
• HubSpot
• Zoho
• Microsoft Dynamics
• CRM propriétaires`,
      },
      {
        q: "Peut-on connecter Centrelatio à un ERP ?",
        a: `Oui.

ERP, logiciels métiers et applications internes peuvent être connectés via API ou webhooks.`,
      },
      {
        q: "Disposez-vous d'API ?",
        a: `Oui.

Centrelatio expose des API et webhooks permettant une intégration complète à votre système d'information.`,
      },
      {
        q: "Puis-je connecter mon site e-commerce ?",
        a: `Oui.

Shopify, WooCommerce, Magento, PrestaShop et d'autres plateformes peuvent être intégrés.`,
      },
    ],
  },

  {
    category: "WhatsApp Business",
    items: [
      {
        q: "Ai-je besoin d'un compte WhatsApp Business Platform ?",
        a: `Pas nécessairement pour commencer.

Vous pouvez :

• Démarrer rapidement via le Portail Client Mutualisé Centrelatio
• Déployer Centrelatio sur votre propre compte WhatsApp Business Platform pour bénéficier de toutes les fonctionnalités avancées.`,
      },
      {
        q: "Pouvez-vous nous accompagner dans la création du compte ?",
        a: `Oui.

Nous accompagnons nos clients dans :

• La création du compte
• La vérification Meta
• La configuration
• Les templates
• La mise en production`,
      },
      {
        q: "Puis-je conserver mon numéro actuel ?",
        a: `Dans la plupart des cas, oui.`,
      },
    ],
  },

  {
    category: "Déploiement & Facturation",
    items: [
      {
        q: "Existe-t-il une période d'essai ?",
        a: `Oui.

Selon votre projet, nous pouvons mettre en place une démonstration ou un pilote.

De nombreuses entreprises choisissent de commencer par le Portail Client Mutualisé Centrelatio, qui permet de lancer rapidement des parcours automatisés sans projet technique complexe.`,
      },
      {
        q: "Pourquoi commencer par le Portail Client Mutualisé ?",
        a: `Parce qu'il permet de :

• Tester l'efficacité de WhatsApp
• Déployer rapidement des FAQ
• Mettre en place un bot de présentation des produits et services
• Lancer des enquêtes de satisfaction via QR Code
• Collecter des demandes d'informations
• Gérer des réclamations automatisées
• Tester des programmes de fidélité simples

avant d'investir dans un compte WhatsApp Business Platform dédié.`,
      },
      {
        q: "Quelle est la différence entre le Portail Client Mutualisé et un déploiement dédié ?",
        a: `Le Portail Client Mutualisé est idéal pour démarrer rapidement et tester le canal WhatsApp.

Le déploiement dédié ajoute notamment :

• Votre propre numéro WhatsApp
• Live Chat avec agents
• Collaboration multi-agents
• Historique client avancé
• CRM intégré
• Intégrations ERP
• Reporting avancé
• Automatisations sur mesure
• Contrôle complet de l'expérience client`,
      },
      {
        q: "Comment fonctionne la facturation ?",
        a: `La tarification dépend notamment :

• Du mode de déploiement (Portail Mutualisé ou Compte Dédié)
• Du nombre d'utilisateurs
• Des fonctionnalités activées
• Des intégrations souhaitées
• Du volume de notifications et conversations`,
      },
      {
        q: "Combien de temps faut-il pour démarrer ?",
        a: `Le Portail Client Mutualisé peut généralement être mis en place en quelques jours.

Un déploiement complet sur votre propre compte WhatsApp Business Platform peut nécessiter quelques jours à quelques semaines selon la complexité du projet.`,
      },
    ],
  },

  {
    category: "Sécurité & Confidentialité",
    items: [
      {
        q: "Les données sont-elles sécurisées ?",
        a: `Oui.

Centrelatio applique les meilleures pratiques de sécurité et de protection des données.`,
      },
      {
        q: "Qui a accès aux conversations ?",
        a: `Seuls les utilisateurs autorisés de votre organisation disposent d'un accès aux conversations.`,
      },
      {
        q: "Les données m'appartiennent-elles ?",
        a: `Oui.

Vous restez propriétaire de vos données et de votre relation client.`,
      },
    ],
  },
];

export default function Ressources() {
  const location = useLocation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    entreprise: '',
    resourceName: '',
    phone: '',
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (faqId) => {
    setOpenFaq((current) => (current === faqId ? null : faqId))
  }

  const scrollToId = (id) => {
    let attempts = 0
    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }

      attempts += 1
      if (attempts < 20) {
        setTimeout(scrollToTarget, 100)
      }
    }

    setTimeout(scrollToTarget, 80)
  }

  useEffect(() => {
    setPageMeta({
      title: 'Ressources Centrelatio — Guides WhatsApp Business',
      description: 'Accédez à des guides, webinaires et bonnes pratiques pour optimiser votre relation client sur WhatsApp.',
      url: 'https://www.centrelatio.com/ressources',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })
  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      scrollToId(id)
    }
  }, [location.hash])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    if (!form.name || !form.email || !form.entreprise || !form.phone || !form.resourceName) {
      const message = 'Veuillez remplir tous les champs obligatoires.'
      setStatus({ type: 'error', message })
      toast.error(message)
      return
    }

    setLoading(true)
    const toastId = toast.loading('Traitement...')

    try {
      const response = await fetch('/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullname: form.name,
          whatsappNumber: form.phone,
          email: form.email,
          entreprise: form.entreprise,
          serviceInterested: form.resourceName,
          socialSource: 'Website',
          message: `Demande de démonstration: ${form.resourceName}`,
          isPremiumClient: false,
          formType: 'resource',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        const validationMessage = result.errors
          ? Object.values(result.errors).flat().filter(Boolean).join(' ')
          : ''
        throw new Error(result.error || validationMessage || 'Erreur serveur')
      }

      const successMessage = 'Demande envoyée. Nous vous contacterons bientôt.'
      setStatus({ type: 'success', message: successMessage })
      toast.success(successMessage, { id: toastId })
      trackEvent('form_submit', { form: 'resources_demo' })
      setForm({ name: '', email: '', entreprise: '', resourceName: '', phone: '' })
    } catch (error) {
      const message = error.message || 'Erreur serveur'
      setStatus({ type: 'error', message })
      toast.error(message, { id: toastId })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page-main">
      <section className="resources-hero">
        <div className="resources-hero-content">
          <span className="tag-blue">RESSOURCES</span>
          <h1>
            Des ressources pour mieux gerer <br />
            <span className="highlight-green">vos relations sur WhatsApp</span>
          </h1>
          <p className="section-subtitle text-left">
            Guides, webinaires, blog et bonnes pratiques pour vous aider a centraliser vos conversations,
            repondre plus vite et creer une experience client plus fluide.
          </p>
        </div>

        <div className="resources-hero-graphics">
          <div className="resources-mockup">
            <img className="main-mockup-img" src="assets/dashboard.png" alt="Tableau de bord Centrelatio" />

            <div className="floating-badge badge-guides">
              <span className="badge-icon icon-blue"><i className="fa-regular fa-file-lines"></i></span>
              Guides
            </div>
            <div className="floating-badge badge-webinaires">
              <span className="badge-icon icon-green"><i className="fa-solid fa-video"></i></span>
              Webinaires
            </div>
            <div className="floating-badge badge-blog">
              <span className="badge-icon icon-yellow"><i className="fa-regular fa-newspaper"></i></span>
              Blog
            </div>
            <div className="floating-badge badge-bonnes-pratiques">
              <span className="badge-icon icon-purple"><i className="fa-solid fa-lightbulb"></i></span>
              Bonnes pratiques
            </div>
            <div className="whatsapp-bubble-large">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="resources-cards-section">
        <div className="resources-grid">
          {resources.map((resource) => (
            <article className="resource-card-large" key={resource.title}>
              <div className="resource-card-header">
                <div className={`icon-circle ${resource.iconClass}`}>
                  <i className={resource.icon}></i>
                </div>
                <h3>{resource.title}</h3>
              </div>
              <p>{resource.text}</p>
              <a href="#" className="link-green">{resource.link} <i className="fa-solid fa-arrow-right"></i></a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2 className="section-title">
          Questions <span className="highlight-green">frequentes</span>
        </h2>

        {faqCategories.map((cat) => (
          <div className="faq-category" key={cat.category}>
            <h3 className="faq-category-title">{cat.category}</h3>
            <div className="faq-grid">
              {cat.items.map((item) => {
                const itemId = `${cat.category}-${item.q}`
                const isOpen = openFaq === itemId

                return (
                  <div
                    className={`faq-item${isOpen ? ' active' : ''}`}
                    key={itemId}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(itemId)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        toggleFaq(itemId)
                      }
                    }}
                    data-react-faq="true"
                  >
                    <div className="faq-question">
                      <span>{item.q}</span>
                      <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
                    </div>
                    <div className="faq-answer" aria-hidden={!isOpen}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </section>

      <section className="form-cta-section" id="contact-form">
        <div className="form-cta-container">
          <div className="form-cta-text">
            <h2>
              Prêt à transformer vos conversations en <span className="highlight-green-light">relations durables ?</span>
            </h2>
            <p>
              Demandez une démonstration et découvrez comment Centrelatio peut simplifier votre relation client sur WhatsApp.
            </p>
            <div className="form-cta-badges">
              <span className="cta-badge"><i className="fa-solid fa-check"></i> 100% WhatsApp</span>
              <span className="cta-badge"><i className="fa-solid fa-check"></i> Sans application</span>
              <span className="cta-badge"><i className="fa-solid fa-check"></i> Réponse rapide</span>
            </div>
          </div>

          <div className="form-cta-box">
            <h3>Demander une démonstration</h3>
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  name="name"
                  type="text"
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email professionnel"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <input
                  name="entreprise"
                  type="text"
                  placeholder="Entreprise"
                  value={form.entreprise}
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Numero WhatsApp"
                  value={form.phone || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <select name="resourceName" value={form.resourceName} onChange={handleChange}>
                  <option value="" disabled>
                    Besoin principal
                  </option>
                  <option>Relation client</option>
                  <option>Support / SAV</option>
                  <option>Promotions</option>
                  <option>Fidelisation</option>
                </select>
              </div>
              {status && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`form-status ${status.type === 'error' ? 'status-error' : 'status-success'}`}
                >
                  {status.message}
                </div>
              )}
              <button
                className="btn btn-primary w-100"
                type="submit"
                disabled={loading}
                aria-label="Envoyer la demande de démonstration"
              >
                {loading ? (
                  <span className="inline-flex items-center gap-3">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Envoi...
                  </span>
                ) : (
                  <>
                    <i className="fa-brands fa-whatsapp"></i> Envoyer la demande
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
