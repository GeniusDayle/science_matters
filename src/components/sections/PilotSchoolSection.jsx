import { useEffect, useState } from 'react'
import './PilotSchoolSection.css'
import visionImg from '../../assets/images/vision.jpg'
import missionImg from '../../assets/images/mission.jpg'
import objectivesImg from '../../assets/images/objectives.jpg'

const slideshowImages = [visionImg, missionImg, objectivesImg]

export default function PilotSchoolSection() {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slideshowImages.length)
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="pilot-school" id="pilot-school">
      <h1>Our Pilot School</h1>
      <div className="school-details" id="school-details">
        <h2>Yebi High School</h2>
        <img src={slideshowImages[slideIndex]} alt="" className="slide-show" id="slide-show" />
        <p>Ipsom Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis neque laboriosam exercitationem illo earum aperiam magnam cumque! Blanditiis incidunt nam iste veritatis perspiciatis. Rerum magnam sequi porro ex quo ullam.</p>
      </div>
    </section>
  )
}