import { useEffect, useState } from 'react'
import './TeamSection.css'
import teamImg from '../../assets/images/corvell-cranfield.png'

const teamMembers = Array.from({ length: 8 }, (_, index) => ({
  name: `Corvell Cranfield ${index + 1}`,
  role: 'Education Coordinator',
  image: teamImg,
  blurb: `${index + 1} Ipsum lorem dolor sit amet consectetur adipisicing elit. Minima autem temporibus!`,
}))

export default function TeamSection() {
  const [showAll, setShowAll] = useState(false)
  const [activeMember, setActiveMember] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveMember(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section className="team" id="team">
      <h1>Our Team <br /><span className="info">Click the profile pictures for more info!</span></h1>
      <div className={`team-grid ${showAll ? 'show-all' : ''}`} id="team-grid">
        {teamMembers.map((member) => (
          <article
            className="team-member"
            key={member.name}
            tabIndex={0}
            onClick={() => setActiveMember(member)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                setActiveMember(member)
              }
            }}
          >
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <img src={member.image} alt="" className="team-img" />
            <p>{member.blurb}</p>
          </article>
        ))}
      </div>

      {activeMember && (
        <div className="modal" role="dialog" aria-modal="true" tabIndex={-1} style={{ display: 'block' }}>
          <div className="modal-backdrop" role="presentation" onClick={() => setActiveMember(null)} />
          <div className="modal-content" role="document">
            <button type="button" className="modal-close close-btn" aria-label="Close modal." onClick={() => setActiveMember(null)}>&times;</button>
            <h2 className="modal-name">{activeMember.name}</h2>
            <h3 className="modal-role">{activeMember.role}</h3>
            <img className="modal-img" src={activeMember.image} alt={activeMember.name} />
            <p className="modal-blurb">{activeMember.blurb}</p>
          </div>
        </div>
      )}

      <div id="view-more" className="view-more">
        <button id="view-more-btn" className="view-more-btn" type="button" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  )
}