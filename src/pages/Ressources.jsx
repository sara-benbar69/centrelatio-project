import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'
import { trackEvent } from '../lib/analytics'
import { setPageMeta } from '../lib/seo'

const resources = [
  {
    icon: 'fa-regular fa-file-lines',
    iconClass: 'icon-blue',
    titleKey: 'resources.cards.guides.title',
    textKey: 'resources.cards.guides.text',
    linkKey: 'resources.cards.guides.link',
  },
  {
    icon: 'fa-solid fa-video',
    iconClass: 'icon-green',
    titleKey: 'resources.cards.webinars.title',
    textKey: 'resources.cards.webinars.text',
    linkKey: 'resources.cards.webinars.link',
  },
  {
    icon: 'fa-regular fa-newspaper',
    iconClass: 'icon-yellow',
    titleKey: 'resources.cards.blog.title',
    textKey: 'resources.cards.blog.text',
    linkKey: 'resources.cards.blog.link',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    iconClass: 'icon-purple',
    titleKey: 'resources.cards.bestPractices.title',
    textKey: 'resources.cards.bestPractices.text',
    linkKey: 'resources.cards.bestPractices.link',
  },
]

export default function Ressources() {
  const location = useLocation()
  const [form, setForm] = useState({
    name: '',
    email: '',
    entreprise: '',
    resourceName: '',
    phone: '',
  })
  const { t } = useTranslation()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)
  const faqCategories = t('resources.faqCategories', { returnObjects: true })
  const faqTitle = t('resources.faqTitle', { returnObjects: true })

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
          <span className="tag-blue">{t('resources.hero.tag')}</span>
          <h1>
            {t('resources.hero.titlePart1')} <br />
            <span className="highlight-green">{t('resources.hero.titleHighlight')}</span>
          </h1>
          <p className="section-subtitle text-left">{t('resources.hero.subtitle')}</p>
        </div>

        <div className="resources-hero-graphics">
          <div className="resources-mockup">
            <img className="main-mockup-img" src="assets/dashboard.png" alt="Tableau de bord Centrelatio" />

            <div className="floating-badge badge-guides">
              <span className="badge-icon icon-blue"><i className="fa-regular fa-file-lines"></i></span>
              {t('resources.badges.guides')}
            </div>
            <div className="floating-badge badge-webinaires">
              <span className="badge-icon icon-green"><i className="fa-solid fa-video"></i></span>
              {t('resources.badges.webinars')}
            </div>
            <div className="floating-badge badge-blog">
              <span className="badge-icon icon-yellow"><i className="fa-regular fa-newspaper"></i></span>
              {t('resources.badges.blog')}
            </div>
            <div className="floating-badge badge-bonnes-pratiques">
              <span className="badge-icon icon-purple"><i className="fa-solid fa-lightbulb"></i></span>
              {t('resources.badges.bestPractices')}
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
            <article className="resource-card-large" key={resource.titleKey}>
              <div className="resource-card-header">
                <div className={`icon-circle ${resource.iconClass}`}>
                  <i className={resource.icon}></i>
                </div>
                <h3>{t(resource.titleKey)}</h3>
              </div>
              <p>{t(resource.textKey)}</p>
              <a href="#" className="link-green">{t(resource.linkKey)} <i className="fa-solid fa-arrow-right"></i></a>
            </article>
          ))}
        </div>
      </section>

      <section className="faq-section" id="faq">
        <h2 className="section-title">
          {faqTitle.part1} <span className="highlight-green">{faqTitle.part2}</span>
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
              {t('contact.cta.titlePart1')} <span className="highlight-green-light">{t('contact.cta.titleHighlight')}</span>
            </h2>
            <p>{t('contact.cta.subtitle')}</p>
            <div className="form-cta-badges">
              <span className="cta-badge"><i className="fa-solid fa-check"></i> {t('contact.cta.badges.0')}</span>
              <span className="cta-badge"><i className="fa-solid fa-check"></i> {t('contact.cta.badges.1')}</span>
              <span className="cta-badge"><i className="fa-solid fa-check"></i> {t('contact.cta.badges.2')}</span>
            </div>
          </div>

            <div className="form-cta-box">
            <h3>{t('contact.formTitle')}</h3>
            <form className="demo-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  name="name"
                  type="text"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={form.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <input
                  name="entreprise"
                  type="text"
                  placeholder={t('contact.form.companyPlaceholder')}
                  value={form.entreprise}
                  onChange={handleChange}
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder={t('contact.form.whatsappPlaceholder')}
                  value={form.phone || ''}
                  onChange={handleChange}
                />
              </div>
              <div className="form-row">
                <select name="resourceName" value={form.resourceName} onChange={handleChange}>
                  <option value="" disabled>
                    {t('contact.form.selectPlaceholder')}
                  </option>
                  <option>{t('contact.form.options.relation')}</option>
                  <option>{t('contact.form.options.support')}</option>
                  <option>{t('contact.form.options.promotions')}</option>
                  <option>{t('contact.form.options.loyalty')}</option>
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
                aria-label={t('contact.form.ariaLabel')}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-3">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    {t('contact.button.sending')}
                  </span>
                ) : (
                  <>
                    <i className="fa-brands fa-whatsapp"></i> {t('contact.button.submit')}
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
