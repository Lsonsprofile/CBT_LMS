import { useEffect, useRef, useState } from 'react'
import './Header.css'

const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#schools', label: 'Schools' },
  { href: '#portal', label: 'Educational Portal' },
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const accountRef = useRef<HTMLDivElement>(null)
  const accountToggleRef = useRef<HTMLButtonElement>(null)
  const hamburgerRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node

      if (isAccountOpen && accountRef.current && !accountRef.current.contains(target)) {
        setIsAccountOpen(false)
      }

      if (isMenuOpen && navRef.current && !navRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      if (isAccountOpen) {
        setIsAccountOpen(false)
        accountToggleRef.current?.focus()
      }

      if (isMenuOpen) {
        setIsMenuOpen(false)
        hamburgerRef.current?.focus()
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isAccountOpen, isMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) setIsMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
    setIsAccountOpen(false)
  }

  const toggleAccount = () => {
    setIsAccountOpen((open) => !open)
    setIsMenuOpen(false)
  }

  const handleLinkClick = (href: string) => {
    setActiveLink(href)
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`kt-nav${isMenuOpen ? ' is-open' : ''}${isScrolled ? ' is-scrolled' : ''}`}
      ref={navRef}
    >
      <div className="kt-nav__inner">
        <a href="#home" className="kt-logo" aria-label="Kidstech home">
          <span className="kt-logo__wordmark">kidstech</span>
        </a>

        <nav className="kt-nav__menu" id="primaryNav" aria-label="Primary navigation">
          {navigationLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`kt-nav__link${activeLink === href ? ' is-active' : ''}`}
              aria-current={activeLink === href ? 'page' : undefined}
              onClick={() => handleLinkClick(href)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="kt-nav__actions">
          <div
            className={`kt-account-dropdown${isAccountOpen ? ' is-open' : ''}`}
            ref={accountRef}
          >
            <button
              type="button"
              className="kt-btn-login"
              aria-haspopup="true"
              aria-expanded={isAccountOpen}
              aria-controls="accountMenu"
              onClick={toggleAccount}
              ref={accountToggleRef}
            >
              <span>Login</span>
              <svg className="kt-btn-login__chevron" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div className="kt-dropdown-panel" id="accountMenu">
              <a href="#login" className="kt-dropdown-item" onClick={() => setIsAccountOpen(false)}>
                <span className="kt-dropdown-item__icon kt-dropdown-item__icon--login" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                  </svg>
                </span>
                <span className="kt-dropdown-item__content">
                  <span className="kt-dropdown-item__title">Log In</span>
                  <span className="kt-dropdown-item__desc">Access your student or parent portal</span>
                </span>
              </a>

              <div className="kt-dropdown-divider" role="separator" />

              <a href="#signup" className="kt-dropdown-item" onClick={() => setIsAccountOpen(false)}>
                <span className="kt-dropdown-item__icon kt-dropdown-item__icon--signup" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <line x1="20" y1="8" x2="20" y2="14" />
                    <line x1="23" y1="11" x2="17" y2="11" />
                  </svg>
                </span>
                <span className="kt-dropdown-item__content">
                  <span className="kt-dropdown-item__title">Sign Up</span>
                  <span className="kt-dropdown-item__desc">Create a new Kidstech account</span>
                </span>
              </a>
            </div>
          </div>

          <button
            type="button"
            className="kt-hamburger"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primaryNav"
            onClick={toggleMenu}
            ref={hamburgerRef}
          >
            <span className="kt-hamburger__bar" />
            <span className="kt-hamburger__bar" />
            <span className="kt-hamburger__bar" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
