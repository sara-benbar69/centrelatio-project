import { Fragment, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Clock3, Heart, Settings, ShieldCheck, UsersRound } from 'lucide-react'
import { Icon } from '../components/Icons'
import { setPageMeta } from '../lib/seo'
import '../i18n'

function Home() {
  const { t } = useTranslation()
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

  const useCases = t('home.useCases', { returnObjects: true })
  const cards = t('home.useCases.cards', { returnObjects: true })
  const steps = t('home.howItWorks.steps', { returnObjects: true })
  const whyItems = t('home.whyChoose.items', { returnObjects: true })
  const finalCta = t('home.finalCta', { returnObjects: true })

  return (
    <main>
      <section className="hero hero-split">
        <div className="hero-text">
          <div className="hero-tag">{t('home.hero.tag')}</div>
          <h1>
            {t('home.hero.titlePart1')} <br />
            <span className="highlight-green">{t('home.hero.titlePart2')}</span>
          </h1>
          <p className="hero-subtitle">{t('home.hero.subtitle')}</p>

          <div className="hero-cta">
            <a href="#contact-form" className="btn btn-primary"><Icon name="whatsapp" /> {t('home.hero.cta')}</a>
          </div>

          <div className="hero-features">
            {t('home.hero.features', { returnObjects: true }).map((feature) => (
              <div key={feature} className="feature-item"><Icon name="check-circle" /> {feature}</div>
            ))}
          </div>
        </div>

        <div className="hero-image-side">
          <div className="hero-graphics">
            <img src="/assets/hero-illustration.png" alt="Centrelatio Plateforme" style={{ width: '100%', maxWidth: '700px', height: 'auto' }} />
          </div>
        </div>
      </section>

      <section className="use-cases" id="fonctionnalites">
        <h2 className="section-title">
          {useCases.title}<br />
          <span className="highlight-green">{useCases.titleHighlight}</span>
        </h2>
        <p className="section-subtitle">{useCases.subtitle}</p>

        <div className="cards-grid">
          {cards.map((card) => (
            <div key={card.title} className="card">
              <div className={`icon icon-${card.iconColor}`}><img src={card.iconSrc} alt={card.iconAlt} /></div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
          <div className="card whatsapp-highlight-card">
            <div className="icon whatsapp-icon"><Icon name="whatsapp" /></div>
            <h3>{useCases.highlightCard.title}</h3>
            <p>{useCases.highlightCard.desc}</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2 className="section-title">{t('home.howItWorks.title')}</h2>
        <div className="steps-container">
          {steps.map((step) => (
            <Fragment key={step.number}>
              <div className="step">
                <div className="step-icon-wrapper">
                  <img src={step.iconSrc} alt={step.iconAlt} />
                </div>
                <div className="step-content">
                  <h3><span className="step-number">{step.number}</span> {step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
              {step.number !== '4' && (
                <div className="step-arrow"><i className="fa-solid fa-arrow-down"></i></div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="why-choose">
        <h2 className="section-title text-left">{t('home.whyChoose.title')} <span className="highlight-green">{t('home.whyChoose.titleHighlight')}</span></h2>
        <ul className="why-choose-list">
          {whyItems.map((item) => (
            <li key={item.title}>
              <UsersRound className="why-icon" />
              <div className="content"><strong>{item.title}</strong><p>{item.text}</p></div>
            </li>
          ))}
        </ul>
      </section>

      <section className="final-cta gradient-bg">
        <h2>{finalCta.title}</h2>
        <p>{finalCta.text}</p>
        <a href="#contact-form" className="btn btn-white"><Icon name="whatsapp" className="icon-green" /> {finalCta.button}</a>
        <span className="guarantee">{finalCta.guarantee}</span>
      </section>
    </main>
  )
}

export default Home
