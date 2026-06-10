import './Header.css'
import logoImg from '../assets/images/sciences-matter-logo-glow.png'
import bannerVideo from '../assets/images/sciences-matter-banner-mobile.mp4'

export default function Header({ theme, setTheme, menuOpen, setMenuOpen }) {
  return (
    <>
      <header>
        <div className="btn-bar" id="btn-bar">
          <div className="mode">
            <button type="button" className={`light-btn ${theme === 'light' ? 'active' : ''}`} aria-label="Switch to light mode." onClick={() => setTheme('light')}>
              <i className="fi fi-sr-brightness" />
            </button>
            <button type="button" className={`dark-btn ${theme === 'dark' ? 'active' : ''}`} aria-label="Switch to dark mode." onClick={() => setTheme('dark')}>
              <i className="fi fi-sc-moon" />
            </button>
          </div>
          <button type="button" className="menu-btn" id="menu-btn" aria-label="Toggle navigation menu on phones." onClick={() => setMenuOpen((prev) => !prev)}>
            <i className="fi fi-br-menu-burger" />
          </button>
        </div>

        <div className="logo" id="logo">
          <img src={logoImg} alt="Logo of Sciences Matter." />
        </div>

        <video autoPlay muted loop playsInline className="background-vid" id="background-vid">
          <source src={bannerVideo} type="video/mp4" aria-hidden="true" />
        </video>
      </header>

      
    </>
  )
}
