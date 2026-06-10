import React, { useState } from 'react'
import './AboutSection.css'
import Objectives from './Objectives'
import Vision from './Vision'
import Mission from './Mission'

export default function AboutSection() {
  const [about, setAbout] = useState('vision')
  
  return (
    <section className="about-us" id="about-us">
      <h1>About Us</h1>
      <div className="about-us-menu" id="about-us-menu" role="tablist" aria-label="About us section menu">
        <button type="button" className={`about-us-btn ${about === 'vision' ? 'active' : ''}`} role="tab" aria-selected={about === 'vision'} onClick={() => setAbout('vision')}>Vision</button>
        <button type="button" className={`about-us-btn ${about === 'mission' ? 'active' : ''}`} role="tab" aria-selected={about === 'mission'} onClick={() => setAbout('mission')}>Mission</button>
        <button type="button" className={`about-us-btn ${about === 'objectives' ? 'active' : ''}`} role="tab" aria-selected={about === 'objectives'} onClick={() => setAbout('objectives')}>Objectives</button>
      </div>
      <div className="about-us-grid" id="about-us-grid">
        {about === 'vision' && <Vision />}
        {about === 'mission' && <Mission />}
        {about === 'objectives' && <Objectives />}
      </div>
    </section>
  )
}
