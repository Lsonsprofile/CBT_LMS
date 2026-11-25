import { useEffect, useRef, useState } from 'react'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Schools', href: '#schools' },
  { label: 'Learning', href: '#learning' },
  { label: 'Courses', href: '#courses' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const accountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setIsAccountOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAccountOpen(false)
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const closeMenus = () => {
    setIsMenuOpen(false)
    setIsAccountOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => !isOpen)
    setIsAccountOpen(false)
  }

  const toggleAccount = () => {
    setIsAccountOpen((isOpen) => !isOpen)
    setIsMenuOpen(false)
  }

  return (
    <header className={`kt-nav ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="kt-nav__inner">
        <a
          href="#home"
          className="kt-logo"
          aria-label="Kidstech home"
          onClick={closeMenus}
        >
          <img
            className="kt-logo__image"
            src="/images/kidstech-logo.png"
            alt="Kidstech"
          />
        </a>

        <nav
          className="kt-nav__menu"
          id="primary-navigation"
          aria-label="Primary navigation"
        >
          {navigationLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`kt-nav__link ${index === 0 ? 'is-active' : ''}`}
              onClick={closeMenus}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="kt-nav__actions">
          <div className="kt-account-dropdown" ref={accountRef}>
            <button
              type="button"
              className="kt-btn-login"
              aria-haspopup="true"
              aria-expanded={isAccountOpen}
              aria-controls="account-menu"
              onClick={toggleAccount}
            >
              <span>Login</span>
              <svg
                className="kt-btn-login__chevron"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <div
              className={`kt-dropdown-panel ${isAccountOpen ? 'is-visible' : ''}`}
              id="account-menu"
              hidden={!isAccountOpen}
            >
              <a href="#login" className="kt-dropdown-item" onClick={closeMenus}>
                <span className="kt-dropdown-item__icon" aria-hidden="true">↪</span>
                <span className="kt-dropdown-item__content">
                  <span className="kt-dropdown-item__title">Log In</span>
                  <span className="kt-dropdown-item__desc">
                    Access your learning portal
                  </span>
                </span>
              </a>

              <div className="kt-dropdown-divider" />

              <a href="#signup" className="kt-dropdown-item" onClick={closeMenus}>
                <span className="kt-dropdown-item__icon" aria-hidden="true">＋</span>
                <span className="kt-dropdown-item__content">
                  <span className="kt-dropdown-item__title">Sign Up</span>
                  <span className="kt-dropdown-item__desc">
                    Create a Kidstech account
                  </span>
                </span>
              </a>
            </div>
          </div>

          <button
            type="button"
            className="kt-hamburger"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={toggleMenu}
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
