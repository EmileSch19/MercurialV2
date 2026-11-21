import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© 2026 Vélox — boutique fictive, projet étudiant d’Emile Dufoulon. Aucun paiement réel.</p>
        <nav aria-label="Liens du pied de page">
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/contact">Contact</Link>
          <a href="https://github.com/EmileSch19/MercurialV2" target="_blank" rel="noreferrer">Code source</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
