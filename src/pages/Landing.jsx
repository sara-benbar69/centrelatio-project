import { Suspense, lazy, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { setPageMeta } from '../lib/seo'

const Home = lazy(() => import('./Home'))
const Entreprises = lazy(() => import('./Entreprises'))
const Tarifs = lazy(() => import('./Tarifs'))
const Ressources = lazy(() => import('./Ressources'))

export default function Landing() {
  const location = useLocation()

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
      title: 'Centrelatio — Plateforme WhatsApp Business',
      description: 'Centralisez toutes les interactions clients sur WhatsApp avec Centrelatio.',
      url: 'https://www.centrelatio.com/',
      image: 'https://www.centrelatio.com/assets/hero-og.png',
    })

  }, [])

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      scrollToId(id)
    }
  }, [location.hash])

  useEffect(() => {
    const handleContactLinkClick = (event) => {
      const link = event.target.closest('a[href="#contact-form"]')
      if (!link) return

      event.preventDefault()
      window.history.pushState(null, '', '#contact-form')
      scrollToId('contact-form')
    }

    document.addEventListener('click', handleContactLinkClick)
    return () => document.removeEventListener('click', handleContactLinkClick)
  }, [])

  return (
    <main className="page-main">
      <Suspense fallback={null}>
        <div id="hero"><Home /></div>
        <div id="fonctionnalites">{/* features anchor handled inside Home */}</div>
        <div id="entreprises"><Entreprises /></div>
        <div id="tarifs"><Tarifs showTestimonials={false} /></div>
        <div id="ressources"><Ressources /></div>
      </Suspense>
    </main>
  )
}
