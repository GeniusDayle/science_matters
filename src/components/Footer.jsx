import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <p>&copy; Sciences Matter</p>
      <div id="links" className="links">
        <a href="https://www.instagram.com/sciences_matter/" target="_blank" rel="noreferrer">
          <i className="fi fi-brands-instagram" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61584445757298" target="_blank" rel="noreferrer">
          <i className="fi fi-brands-facebook" />
        </a>
      </div>
      <p>Phone: 999 99999999</p>
      <p>Email: sciencesmatter.org</p>
      <p>Website by: Dayle Cranfield</p>
    </footer>
  )
}
