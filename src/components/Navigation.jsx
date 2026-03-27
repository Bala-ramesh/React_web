import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/case-studies', label: 'Work In Action' },
  { path: '/experience', label: 'My Work'},
  { path: '/component-lab', label: 'Component Lab' },
  { path: '/contact', label: 'Contact' },
]

function Navigation({ onThemeToggle, highContrast }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    closeMenu()
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const menu = menuRef.current
    if (!menu) return

    const focusables = menu.querySelectorAll(
      'a[href], button:not([disabled])'
    )
    const first = focusables[0]
    const last = focusables[focusables.length - 1]

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu()
        toggleRef.current?.focus()
        return
      }
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last?.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first?.focus()
        }
      }
    }

    menu.addEventListener('keydown', handleKeyDown)
    first?.focus()
    return () => menu.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={menuOpen}
        aria-haspopup="true"
        aria-controls="primary-menu"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span className="nav-toggle-inner" aria-hidden="true">
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </span>
      </button>

      <nav
        id="primary-menu"
        className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
        aria-label="Primary Navigation"
        ref={menuRef}
      >
        <ul className="nav-list">
          {NAV_ITEMS.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'nav-link-active' : ''}`
                }
                aria-current={location.pathname === path ? 'page' : undefined}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-pressed={highContrast}
            aria-label={highContrast ? 'Disable high contrast' : 'Enable high contrast'}
          >
            {highContrast ? 'High contrast on' : 'High contrast'}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
