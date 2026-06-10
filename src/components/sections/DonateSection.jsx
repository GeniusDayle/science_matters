import './DonateSection.css'
import donateImg from '../../assets/images/donate.jpg'

export default function DonateSection() {
  return (
    <section className="donate" id="donate">
      <h1>Donate</h1>
      <div className="donate-info" id="donate-info">
        <h2>Support the Next Generation of Medical Leaders</h2>
        <img src={donateImg} alt="" className="slide-show" />
        <p>At <strong>Sciences Matter</strong>, we believe that access to quality education empowers communities and transforms futures.<br />Your donation helps us inspire and equip the next generation of doctors and science professionals in Papua New Guinea.<br /><br />Every contribution—big or small—helps expand learning opportunities, provide essential resources, and support students on their path to creating healthier, stronger communities.<br /><br /><strong>Thank you for helping make science education matter.</strong></p>
        <button className="donate-btn" id="donate-btn" aria-label="Donate to Sciences Matter." type="button">Donate</button>
      </div>
    </section>
  )
}