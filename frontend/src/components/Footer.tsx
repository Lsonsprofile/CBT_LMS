import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <footer className="kt-footer" aria-labelledby="kt-footer-heading">
      <div className="kt-footer__glow" aria-hidden="true" />

      <div className="kt-footer__container">
        <section className="kt-footer__cta" aria-labelledby="kt-footer-heading">
          <div className="kt-footer__cta-copy">
            <p className="kt-footer__eyebrow">Let’s work together</p>
            <h2 id="kt-footer-heading">
              Bring technology learning closer to your learners.
            </h2>
            <p>
              Talk with our team about bringing the Mobile ICT Program to your school.
            </p>
          </div>
          <div className="kt-footer__cta-actions">
            <a
              className="kt-footer__button kt-footer__button--primary"
              href="#what-we-do"
            >
              ICT Courses
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              className="kt-footer__button kt-footer__button--secondary"
              href="mailto:hello@kidstechglobal.org?subject=Contact%20Kids%20Tech%20Global"
            >
              Contact Us
            </a>
          </div>
        </section>

        <div className="kt-footer__main">
          <div className="kt-footer__brand">
            <div className="kt-footer__logo">
              <svg
                viewBox="0 0 194 56"
                role="img"
                aria-labelledby="kt-footer-logo-title"
              >
                <title id="kt-footer-logo-title">Kids Tech Global</title>
                <g className="kt-footer__logo-gear" transform="translate(-24 0)" fill="#2dd4bf">
                  <rect x="180" y="2" width="6" height="7" rx="1.5" transform="rotate(-12 183 5)" />
                  <rect x="193" y="5" width="6" height="7" rx="1.5" transform="rotate(15 196 8)" />
                  <rect x="204" y="13" width="6" height="7" rx="1.5" transform="rotate(42 207 16)" />
                  <rect x="210" y="25" width="6" height="7" rx="1.5" transform="rotate(75 213 28)" />
                  <rect x="208" y="38" width="6" height="7" rx="1.5" transform="rotate(108 211 41)" />
                  <rect x="199" y="47" width="6" height="7" rx="1.5" transform="rotate(138 202 50)" />
                  <rect x="186" y="49" width="6" height="7" rx="1.5" transform="rotate(168 189 52)" />
                  <path d="M167 11C173 7 181 6 189 8C201 11 209 22 208 34C207 46 196 54 184 53C177 52 171 49 167 44L172 40C175 44 180 46 185 46C193 47 200 41 201 33C202 24 196 16 187 14C181 13 175 14 170 17L167 11Z" />
                </g>
                <text x="2" y="27" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="22" letterSpacing=".5">
                  <tspan fill="#ef4444">K</tspan><tspan fill="#f59e0b">I</tspan><tspan fill="#10b981">D</tspan><tspan fill="#0ea5e9">S</tspan><tspan fill="#cbd5e1" dx="4">TECH</tspan>
                </text>
                <text x="16" y="48" fontFamily="'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="21" letterSpacing="1.2" fill="#f1f5f9">
                  GLOBAL
                </text>
              </svg>
            </div>
            <p className="kt-footer__brand-note">
              Technology education for schools, homes and connected learning.
            </p>
          </div>

          <nav className="kt-footer__column" aria-label="Programs">
            <h3>Programs</h3>
            <ul>
              <li><a href="#what-we-do">Mobile ICT Program</a></li>
              <li><a href="#what-we-do">Coding &amp; Graphics Design</a></li>
              <li><a href="#what-we-do">Scratch Programming</a></li>
              <li><a href="#what-we-do">AI &amp; Automation</a></li>
            </ul>
          </nav>

          <nav className="kt-footer__column" aria-label="Explore Kids Tech Global">
            <h3>Explore</h3>
            <ul>
              <li><a href="#what-we-do">What We Do</a></li>
              <li>
                <a href="mailto:hello@kidstechglobal.org">Contact the team</a>
              </li>
            </ul>
          </nav>

          <address className="kt-footer__column kt-footer__contact">
            <h3>Get in touch</h3>
            <a className="kt-footer__contact-link" href="mailto:hello@kidstechglobal.org">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              hello@kidstechglobal.org
            </a>
            <p className="kt-footer__location">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Lagos, Nigeria
            </p>
            <p className="kt-footer__contact-note">
              For school partnerships, program enquiries and general information.
            </p>
          </address>
        </div>
      </div>

      <div className="kt-footer__bottom">
        <div className="kt-footer__container kt-footer__bottom-inner">
          <p>© {currentYear} Kids Tech Global. All rights reserved.</p>
          <button className="kt-footer__top-button" type="button" onClick={handleBackToTop}>
            Back to top
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
