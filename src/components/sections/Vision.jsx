import visionImg from '../../assets/images/vision.jpg'

export default function Vision() {
  return (
    <article className="vision" id="vision">
        <h2>Our Vision</h2>
        <div className="about-info">
          <img src={visionImg} alt="A woman looking forward into the sunset symbolizing envisioning the future." />
          <p>To inspire a generation of young Papua New Guineans to pursue excellence in the Sciences by creating learning environments where curiosity, discovery and innovation thrive.</p>
        </div>
    </article>
  )
}