import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SkipLink from './SkipLink'
import Navigation from './Navigation'
import styles from './Header.module.css'

/**
 * Navigation Bar: sticky header with skip link, logo, primary nav (ul/li),
 * mobile hamburger menu (focus trap, Escape to close), and high-contrast toggle.
 * Uses global design tokens (--color-*, --space-*, --nav-bg, --focus-ring, etc.).
 */
function Header() {
  const [highContrast, setHighContrast] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('high-contrast', highContrast)
  }, [highContrast])

  return (
    <header className={styles.header}>
      <SkipLink />
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo} aria-label="Home">
          Bala's Page
        </Link>
        <Navigation
          onThemeToggle={() => setHighContrast((prev) => !prev)}
          highContrast={highContrast}
        />
      </div>
    </header>
  )
}

export default Header
