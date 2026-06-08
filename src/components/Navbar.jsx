import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileActive, setMobileActive] = useState(false)
  const location = useLocation()
  const isMobile = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileActive(false)
  }, [location.pathname])

  const toggleMobileMenu = () => {
    setMobileActive((active) => !active)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const scrollToId = (id) => (e) => {
    e && e.preventDefault()
    setMobileActive(false)
    let attempts = 0

    const scrollToTarget = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState && history.replaceState(null, '', `#${id}`)
        return
      }

      attempts += 1
      if (attempts < 20) {
        setTimeout(scrollToTarget, 100)
      } else {
        window.location.href = `/#${id}`
      }
    }

    scrollToTarget()
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/" aria-label="Centrelatio accueil">
            <img src="/assets/logo.png" alt="Centrelatio" className="logo-img" />
          </Link>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        {!isMobile && (
          <div className="navbar-menu">
            <nav className="desktop-nav" aria-label="Navigation principale">
              <a href="#hero" onClick={scrollToId('hero')} className={isActive('/')}>Accueil</a>
              <a href="#fonctionnalites" onClick={scrollToId('fonctionnalites')}>Fonctionnalites</a>
              <a href="#entreprises" onClick={scrollToId('entreprises')}>Pour les entreprises</a>
              <a href="#tarifs" onClick={scrollToId('tarifs')}>Tarifs</a>
              <a href="#ressources" onClick={scrollToId('ressources')}>Ressources <i className="fa-solid fa-chevron-down nav-icon"></i></a>
            </nav>

            <div className="nav-actions">
              <a href="#contact-form" onClick={scrollToId('contact-form')} className="btn-primary-small">
                <i className="fa-brands fa-whatsapp"></i> Demander une démo
              </a>
            </div>
          </div>
        )}

        {/* Mobile Navigation - hidden on desktop */}
        {isMobile && (
          <>
            <div className={`navbar-menu ${mobileActive ? 'active' : ''}`}>
              <nav className="desktop-nav" aria-label="Navigation principale">
                <a href="#hero" onClick={scrollToId('hero')} className={isActive('/')}>Accueil</a>
                <a href="#fonctionnalites" onClick={scrollToId('fonctionnalites')}>Fonctionnalités</a>
                <a href="#entreprises" onClick={scrollToId('entreprises')}>Pour les entreprises</a>
                <a href="#tarifs" onClick={scrollToId('tarifs')}>Tarifs</a>
                <a href="#ressources" onClick={scrollToId('ressources')}>Ressources <i className="fa-solid fa-chevron-down nav-icon"></i></a>
              </nav>

              <div className="nav-actions">
                <a href="#contact-form" onClick={scrollToId('contact-form')} className="btn-primary-small">
                  <i className="fa-brands fa-whatsapp"></i> Demander une démo
                </a>
              </div>
            </div>

            <button className="menu-toggle" onClick={toggleMobileMenu} aria-label="Ouvrir le menu" aria-expanded={mobileActive}>
              <i className={`fa-solid ${mobileActive ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
