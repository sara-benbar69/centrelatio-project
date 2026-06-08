import { useState } from 'react'
import { ArrowRight, Phone, ShieldCheck, Sparkles, MessageCircle, Users } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'Conversion instantanée', subtitle: 'Transformez les visiteurs en leads qualifiés.' },
  { icon: Users, title: 'Segmentation premium', subtitle: 'Premium, WhatsApp, Instagram, TikTok et QR Code.' },
  { icon: ShieldCheck, title: 'Sûr & fiable', subtitle: 'Données collectées avec un workflow sécurisé.' },
]

const sources = ['WhatsApp', 'Instagram', 'TikTok', 'QR Code']
const services = ['WhatsApp CRM', 'Support client', 'Gestion de leads', 'Marketing conversationnel']

export default function LeadCaptureSection() {
  const [form, setForm] = useState({
    fullname: '',
    whatsappNumber: '',
    email: '',
    entreprise: '',
    serviceInterested: services[0],
    socialSource: sources[3],
    message: '',
    isPremiumClient: false,
  })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    setLoading(true)
    try {
      const res = await fetch('/submit.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, formType: 'lead' }),
      })
      const data = await res.json()
      if (!res.ok) {
        const validationMessage = data.errors
          ? Object.values(data.errors).flat().filter(Boolean).join(' ')
          : ''
        throw new Error(data.error || validationMessage || 'Erreur serveur')
      }
      setStatus({ type: 'success', message: data.message || 'Lead envoyé avec succès.' })
      setForm({
        fullname: '',
        whatsappNumber: '',
        email: '',
        entreprise: '',
        serviceInterested: services[0],
        socialSource: sources[3],
        message: '',
        isPremiumClient: false,
      })
    } catch (err) {
      setStatus({ type: 'error', message: err.message || 'Erreur lors de l\'envoi.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 xl:gap-14">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-900 via-slate-900 to-slate-950 px-8 py-12 shadow-2xl sm:px-10 sm:py-14 lg:px-12 lg:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.18),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.16),_transparent_28%)]" />
          <div className="relative z-10 max-w-xl">
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-200 shadow-sm">
              Leads CRM premium
            </span>
            <h2 className="mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Capturez les prospects WhatsApp, Instagram, TikTok et QR Code.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Donnez à votre équipe un formulaire moderne qui centralise chaque demande dans un mini CRM, avec priorisation premium et suivi instantané.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur-sm transition hover:border-emerald-300/40 hover:bg-white/10">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-emerald-200 shadow-inner">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-white">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{feature.subtitle}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-slate-200/80 sm:p-10 lg:p-12">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-600">Formulaire Lead</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">Réservez une démo convertissante</h3>
            <p className="mt-3 text-sm leading-6 text-slate-500">Complétez ce formulaire et notre équipe vous contacte avec une stratégie adaptée.</p>
          </div>

          {status && (
            <div className={`rounded-3xl border p-4 text-sm font-medium ${status.type === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
              {status.message}
            </div>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Nom complet
                <input
                  name="fullname"
                  value={form.fullname}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="Jean Dupont"
                />
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Email professionnel
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  placeholder="contact@entreprise.com"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-900">
              Entreprise
              <input
                name="entreprise"
                value={form.entreprise}
                onChange={handleChange}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder="Nom de l'entreprise"
              />
            </label>

            <label className="space-y-2 text-sm font-medium text-slate-900">
              Numéro WhatsApp
              <div className="flex overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-100">
                <span className="flex items-center gap-2 bg-slate-100 px-4 text-sm font-semibold text-slate-600">
                  <Phone className="h-4 w-4 text-emerald-600" />
                  +33
                </span>
                <input
                  name="whatsappNumber"
                  value={form.whatsappNumber}
                  onChange={handleChange}
                  type="tel"
                  required
                  className="h-12 flex-1 border-none bg-transparent px-4 text-sm text-slate-900 outline-none"
                  placeholder="6 12 34 56 78"
                />
              </div>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Service recherché
                <select
                  name="serviceInterested"
                  value={form.serviceInterested}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  {services.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="space-y-2 text-sm font-medium text-slate-900">
                Canal d'origine
                <select
                  name="socialSource"
                  value={form.socialSource}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  {sources.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="space-y-2 text-sm font-medium text-slate-900">
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                placeholder="Décrivez brièvement votre besoin"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-emerald-300">
                <input
                  name="isPremiumClient"
                  type="checkbox"
                  checked={form.isPremiumClient}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                />
                Client Premium
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                {loading ? 'Envoi...' : 'Demander une démo'}
                <ArrowRight className="ml-3 h-4 w-4" />
              </button>
            </div>
          </form>

          <div className="mt-8 grid gap-3 rounded-3xl border border-slate-100 bg-slate-50 p-5 text-sm text-slate-600 shadow-sm sm:grid-cols-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Support WhatsApp</p>
                <p className="text-slate-500">Réponse rapide en moins de 24h.</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Conversion premium</p>
                <p className="text-slate-500">Attention spéciale aux prospects haut de gamme.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
