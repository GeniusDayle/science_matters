import { useEffect } from 'react'
import './NavMenu.css'

export default function NavMenu({ theme, setTheme, menuOpen, setMenuOpen }) {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 786) setMenuOpen(false)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setMenuOpen])

  return (
    <>
      <nav className="nav-menu" id="nav-menu" aria-label="Main navigation">
        <div className="side-menu" id="side-menu">
          <div className="side-menu-mode" id="side-menu-mode">
            <button type="button" className={`light-btn ${theme === 'light' ? 'active' : ''}`} aria-label="Switch to light mode." onClick={() => setTheme('light')}>
              <i className="fi fi-sr-brightness" />
            </button>
            <button type="button" className={`dark-btn ${theme === 'dark' ? 'active' : ''}`} aria-label="Switch to dark mode." onClick={() => setTheme('dark')}>
              <i className="fi fi-sc-moon" />
            </button>
          </div>
          <div className="side-menu-items">
            <ul>
              {/* <li><a href="#social-media-updates" onClick={() => setMenuOpen(false)}>Recent Updates</a></li> */}
              <li><a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
              <li><a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a></li>
              <li><a href="#pilot-school" onClick={() => setMenuOpen(false)}>Pilot School</a></li>
              <li><a href="#donate" onClick={() => setMenuOpen(false)}>Donate</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`hamburger-menu-backdrop ${menuOpen ? 'is-open' : ''} ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}
        role="presentation"
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`hamburger-menu ${menuOpen ? 'is-open' : ''} ${theme === 'light' ? 'theme-light' : 'theme-dark'}`} id="hamburger-menu" aria-label="Mobile navigation menu">
        <button type="button" className="menu-close close-btn" aria-label="Close menu." onClick={() => setMenuOpen(false)}>&times;</button>
        <ul>
          {/* <li><a href="#social-media-updates" onClick={() => setMenuOpen(false)}>Recent Updates</a></li> */}
          <li><a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#team" onClick={() => setMenuOpen(false)}>Our Team</a></li>
          <li><a href="#pilot-school" onClick={() => setMenuOpen(false)}>Pilot School</a></li>
          <li><a href="#donate" onClick={() => setMenuOpen(false)}>Donate</a></li>
        </ul>
      </aside>
    </>
  )
}
