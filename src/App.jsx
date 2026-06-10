import { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header'
import NavMenu from './components/NavMenu'
import Footer from './components/Footer'
import RecentUpdatesSection from './components/sections/RecentUpdatesSection'
import AboutSection from './components/sections/AboutSection'
import TeamSection from './components/sections/TeamSection'
import PilotSchoolSection from './components/sections/PilotSchoolSection'
import DonateSection from './components/sections/DonateSection'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.background = theme === 'light' ? 'whitesmoke' : '#343a40'
    document.body.style.color = theme === 'light' ? '#343a40' : 'whitesmoke'
    localStorage.setItem('theme', theme)
  }, [theme])


  return (
    <>
      <Header theme={theme} setTheme={setTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="content-menu" id="content-menu">
        <NavMenu theme={theme} setTheme={setTheme} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <main>
          <RecentUpdatesSection />

          <div className="divider social-media-updates" role="presentation" aria-hidden="true" />

          <AboutSection />

          <div className="divider" role="presentation" aria-hidden="true" />

          <TeamSection />

          <div className="divider" role="presentation" aria-hidden="true" />

          <PilotSchoolSection />

          <div className="divider" role="presentation" aria-hidden="true" />

          <DonateSection />
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
