import missionImg from '../../assets/images/mission.jpg'

export default function Mission() {
  return (
    <article className="mission" id="mission">
        <h2>Our Mission</h2>
        <div className="about-info">
            <img src={missionImg} alt="A compass symbolizing the direction to proceed." />
            <p>We are dedicated to strengthening Science education across Papua New Guinea by developing model schools, training teachers, improving resources and building pathways for students to succeed in STEM-related careers that contribute to national growth and global competitiveness.</p>
        </div>
    </article>
  )
}