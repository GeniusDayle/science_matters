import objectivesImg from '../../assets/images/objectives.jpg'

export default function Objectives() {
  return (
    <article className="objectives" id="objectives">
        <h2>Our Key Objectives</h2>
        <img src={objectivesImg} alt="Someone writing down goals in a notebook." />
        <ul>
            <li>Enhance Access and Quality in STEM Education</li>
            <li>Establish fully equipped science laboratories and modern learning spaces that promote practical, inquiry-based learning for secondary learners.</li>
            <li>Develop Teacher Capacity and Professional Excellence</li>
            <li>Provide structured professional development, mentorship and curriculum support to improve teaching quality and classroom engagement in the Sciences.</li>
            <li>Build Data-Driven Systems for Monitoring and Innovation</li>
            <li>Collect, analyse and use learner performance data to inform targeted interventions, policy dialogue and continuous improvement in Science Education.</li>
        </ul>
    </article>
  )
}