import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { trackEvent } from '../lib/analytics'
import { setPageMeta } from '../lib/seo'

const whatsappLink = 'https://wa.me/212600000000'

const contactMethods = [
  {
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp',
    text: 'Échangez avec notre équipe pour une réponse rapide.',
    link: whatsappLink,
    label: '+212 6 00 00 00 00',
  },
  {
    icon: 'fa-regular fa-envelope',
    title: 'Email',
    text: 'Envoyez-nous votre besoin ou votre question.',
    link: 'mailto:contact@centrelatio.com',
    label: 'contact@centrelatio.com',
  },
  {
    icon: 'fa-solid fa-calendar-check',
    title: 'Demo',
    text: 'Planifiez une démonstration adaptée à votre organisation.',
    link: '#contact-form',
    label: 'Demander une démo',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    entreprise: '',
    message: '',
  })

  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setPageMeta({
      title: 'Contact Centrelatio — Démo WhatsApp Business',
      description: 'Contactez notre équipe pour une démonstration de Centrelatio et un accompagnement personnalisé.',
      url: 'https://www.centrelatio.com/contact',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setStatus(null)

    const toastId = toast.loading('Envoi du message...')

    try {
      const res = await fetch('/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: form.name,
          whatsappNumber: form.whatsappNumber,
          email: form.email,
          entreprise: form.entreprise,
          serviceInterested: 'Contact équipe',
          socialSource: 'Website',
          message: form.message,
          isPremiumClient: false,
          formType: 'lead',
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        const validationMessage = data.errors
          ? Object.values(data.errors).flat().filter(Boolean).join(' ')
          : ''
        throw new Error(data.error || validationMessage || 'Erreur serveur')
      }

      setStatus({
        type: 'success',
        message:
          data.message ||
          'Message envoyé. Notre équipe vous contacte rapidement.',
      })

      toast.success('Message envoye avec succes.', {
        id: toastId,
      })

      trackEvent('form_submit', {
        form: 'contact',
      })

      setForm({
        name: '',
        email: '',
        whatsappNumber: '',
        entreprise: '',
        message: '',
      })
    } catch (err) {
      const message = err.message || 'Erreur lors de l envoi.'

      setStatus({
        type: 'error',
        message,
      })

      toast.error(message, {
        id: toastId,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page-main contact-page">
      <section className="contact-preview-shell">
        
        {/* LEFT SIDE */}
        <div className="contact-preview-info">
          <span className="tag-blue">CONTACT</span>

          <h1 className="contact-preview-title">
            Contacter notre{' '}
            <span className="highlight-green">équipe</span>
          </h1>

          <p className="contact-preview-copy">
            Une question, une demande de demo ou un besoin specifique ?
            Remplissez le formulaire et notre équipe vous répond rapidement.
          </p>

          <div className="contact-methods-list">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.link}
                target={
                  method.title === 'WhatsApp'
                    ? '_blank'
                    : undefined
                }
                rel={
                  method.title === 'WhatsApp'
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="contact-method-card"
              >
                <span className="contact-method-icon">
                  <i className={method.icon}></i>
                </span>

                <span>
                  <strong className="contact-method-title">
                    {method.title}
                  </strong>

                  <span className="contact-method-text">
                    {method.text}
                  </span>

                  <span className="contact-method-link">
                    {method.label}
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          id="contact-message-form"
          className="contact-form-card"
        >
          <h2 className="contact-form-title">
            Demander une démonstration
          </h2>

          <p className="contact-form-subtitle">
            Les champs nom complet et WhatsApp sont obligatoires.
          </p>

          {status && (
            <div
              className={`mt-5 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                status.type === 'success'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-rose-200 bg-rose-50 text-rose-700'
              }`}
            >
              {status.message}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="contact-form-grid"
          >
            {/* ROW 1 */}
            <div className="contact-form-row">
              <label className="contact-field">
                Nom complet

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="contact-input"
                />
              </label>

              <label className="contact-field">
                Email professionnel

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="contact@entreprise.com"
                  className="contact-input"
                />
              </label>
            </div>

            {/* ROW 2 */}
            <div className="contact-form-row">
              <label className="contact-field">
                Numero WhatsApp

                <div className="contact-phone-input">
                  <span>
                    +212
                  </span>

                  <input
                    name="whatsappNumber"
                    value={form.whatsappNumber}
                    onChange={handleChange}
                    type="tel"
                    required
                    placeholder="6 00 00 00 00"
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none"
                  />
                </div>
              </label>

              <label className="contact-field">
                Entreprise

                <input
                  name="entreprise"
                  value={form.entreprise}
                  onChange={handleChange}
                  placeholder="Nom de l entreprise"
                  className="contact-input"
                />
              </label>
            </div>

            {/* MESSAGE */}
            <label className="contact-field">
              Message

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Expliquez votre besoin..."
                className="contact-textarea"
              />
            </label>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary contact-submit disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <span className="inline-flex items-center gap-3">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                  Envoi...
                </span>
              ) : (
                <>
                  <i className="fa-brands fa-whatsapp"></i>
                  Envoyer la demande
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
