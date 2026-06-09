import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { useTranslation } from 'react-i18next'
import '../i18n'

function Navbar() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileActive, setMobileActive] = useState(false)
  const [currentLang, setCurrentLang] = useState(i18n.language || 'fr')
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

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng')
    if (storedLang && storedLang !== i18n.language) {
      i18n.changeLanguage(storedLang)
      setCurrentLang(storedLang)
    }
  }, [i18n])

  const setLanguage = (lang) => {
    if (lang === currentLang) return
    i18n.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang)
    setCurrentLang(lang)
  }

  const toggleMobileMenu = () => {
    setMobileActive((active) => !active)
  }

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  const languageSelector = (
    <div className="language-switcher" aria-label={t('navbar.language.label')}>
      <button
        type="button"
        onClick={() => setLanguage('fr')}
        className={currentLang === 'fr' ? 'active' : ''}
      >
        {t('navbar.language.fr')}
      </button>
      <span className="language-divider">|</span>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={currentLang === 'en' ? 'active' : ''}
      >
        {t('navbar.language.en')}
      </button>
    </div>
  )

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
              <a href="#hero" onClick={scrollToId('hero')} className={isActive('/')}>{t('navbar.home')}</a>
              <a href="#fonctionnalites" onClick={scrollToId('fonctionnalites')}>{t('navbar.features')}</a>
              <a href="#entreprises" onClick={scrollToId('entreprises')}>{t('navbar.enterprises')}</a>
              <a href="#tarifs" onClick={scrollToId('tarifs')}>{t('navbar.pricing')}</a>
              <a href="#ressources" onClick={scrollToId('ressources')}>{t('navbar.resources')} <i className="fa-solid fa-chevron-down nav-icon"></i></a>
            </nav>

            <div className="nav-actions">
              {languageSelector}
              <a href="#contact-form" onClick={scrollToId('contact-form')} className="btn-primary-small">
                <i className="fa-brands fa-whatsapp"></i> {t('navbar.requestDemo')}
              </a>
            </div>
          </div>
        )}

        {/* Mobile Navigation - hidden on desktop */}
        {isMobile && (
          <>
            <div className={`navbar-menu ${mobileActive ? 'active' : ''}`}>
              <nav className="desktop-nav" aria-label="Navigation principale">
                <a href="#hero" onClick={scrollToId('hero')} className={isActive('/')}>{t('navbar.home')}</a>
                <a href="#fonctionnalites" onClick={scrollToId('fonctionnalites')}>{t('navbar.features')}</a>
                <a href="#entreprises" onClick={scrollToId('entreprises')}>{t('navbar.enterprises')}</a>
                <a href="#tarifs" onClick={scrollToId('tarifs')}>{t('navbar.pricing')}</a>
                <a href="#ressources" onClick={scrollToId('ressources')}>{t('navbar.resources')} <i className="fa-solid fa-chevron-down nav-icon"></i></a>
              </nav>

              <div className="nav-actions">
                {languageSelector}
                <a href="#contact-form" onClick={scrollToId('contact-form')} className="btn-primary-small">
                  <i className="fa-brands fa-whatsapp"></i> {t('navbar.requestDemo')}
                </a>
              </div>
            </div>

            <button className="menu-toggle" onClick={toggleMobileMenu} aria-label={mobileActive ? t('navbar.closeMenu') : t('navbar.openMenu')} aria-expanded={mobileActive}>
              <i className={`fa-solid ${mobileActive ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
