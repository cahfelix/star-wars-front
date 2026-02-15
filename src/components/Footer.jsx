export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Desenvolvido com <span className="footer-heart">♥</span> por Cah Felix, usando{' '}
          <a 
            href="https://swapi.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            SWAPI
          </a>
        </p>
        <p className="footer-copyright">
          © 2026 Star Wars Project • May the Force be with you
        </p>
      </div>
    </footer>
  )
}

