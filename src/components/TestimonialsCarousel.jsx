import { useEffect, useState } from 'react'

export default function TestimonialsCarousel({ testimonials = [], itemsPerPageDesktop = 3 }) {
  const [itemsPerPage, setItemsPerPage] = useState(1)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      setItemsPerPage(w >= 1024 ? itemsPerPageDesktop : w >= 768 ? itemsPerPageDesktop : 1)
      setPage(0)
    }

    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [itemsPerPageDesktop])

  const totalPages = Math.max(1, Math.ceil(testimonials.length / itemsPerPage))

  const start = page * itemsPerPage
  const visible = testimonials.slice(start, start + itemsPerPage)

  return (
    <div className="testimonials-carousel">
      <div className="t-cards">
        {visible.map((t, i) => (
          <div key={start + i} className="t-card">
            <div className="quote-mark-small">“</div>
            <p>{t.quote}</p>
            <div className="author author-no-avatar">
              <div className="author-info">
                <strong>{t.author}</strong>
                <span>{t.role}<br />{t.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`dot ${page === idx ? 'active' : ''}`}
            aria-label={`Voir la page ${idx + 1}`}
            onClick={() => setPage(idx)}
          />
        ))}
      </div>
    </div>
  )
}
