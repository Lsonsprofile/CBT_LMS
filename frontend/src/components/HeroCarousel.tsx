import { useCallback, useEffect, useRef, useState } from 'react'
import './HeroCarousel.css'

const SLIDE_MS = 6500
const SWIPE_THRESHOLD = 50

const SLIDES = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1600&auto=format&fit=crop',
    alt: 'Students collaborating in a modern classroom',
    badge: 'Technology Education — Built for Every Learner',
    title: 'One platform.',
    highlight: 'Every school. Infinite learning.',
    text:
      'Connect schools, students, teachers and families through practical technology education, digital learning and computer-based testing in one connected experience.',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop',
    alt: 'Teacher guiding students through a digital lesson',
    badge: 'Learn — Build — Grow',
    title: 'Technology for',
    highlight: 'the next generation.',
    text:
      'From classrooms and home lessons to online training and CBT preparation, Kidstech helps learners build practical skills for school, work and the future.',
  },
]

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const goTo = useCallback((index: number) => {
    setCurrent(((index % SLIDES.length) + SLIDES.length) % SLIDES.length)
  }, [])

  const next = useCallback(() => {
    goTo(current + 1)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo(current - 1)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return

    const timer = window.setInterval(() => {
      setCurrent((value) => (value + 1) % SLIDES.length)
    }, SLIDE_MS)

    return () => window.clearInterval(timer)
  }, [paused])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next()
      if (event.key === 'ArrowLeft') prev()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [next, prev])

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return

    const dx = event.changedTouches[0]?.clientX - touchStartX.current

    if (dx <= -SWIPE_THRESHOLD) next()
    else if (dx >= SWIPE_THRESHOLD) prev()

    touchStartX.current = null
  }

  return (
    <section
      id="home"
      className={`hero-carousel${paused ? ' paused' : ''}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide${index === current ? ' active' : ''}`}
          aria-hidden={index !== current}
        >
          <img src={slide.image} alt={slide.alt} className="hero-slide__bg" />
          <div className="hero-slide__overlay" />
          <div className="hero-slide__noise" />

          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge anim anim--badge">
                <span className="hero-badge__dot" />
                {slide.badge}
              </div>

              <h1 className="hero-title anim anim--title">
                {slide.title}
                <span>{slide.highlight}</span>
              </h1>

              <p className="hero-subtitle anim anim--text">{slide.text}</p>

              <div className="hero-actions anim anim--actions">
                <a href="#portal" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  Explore Learning
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </a>

                <a href="#video" className="btn btn-ghost">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-footer">
        <div className="hero-meta">
          <span className="hero-counter">
            <strong>{String(current + 1).padStart(2, '0')}</strong>
            {' / '}
            {String(SLIDES.length).padStart(2, '0')}
          </span>

          <div className="hero-progress" role="tablist" aria-label="Choose slide">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === current}
                aria-label={`Go to slide ${index + 1}`}
                className={`hero-progress__seg${index === current ? ' active' : ''}`}
                onClick={() => goTo(index)}
              >
                <span className="fill" />
              </button>
            ))}
          </div>
        </div>

        <div className="hero-nav">
          <button type="button" className="hero-nav__btn" aria-label="Previous slide" onClick={prev}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button type="button" className="hero-nav__btn" aria-label="Next slide" onClick={next}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
