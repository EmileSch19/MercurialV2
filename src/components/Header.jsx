import { Link, NavLink } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useCart } from "../context/CartContext"

const Header = () => {
  const { count } = useCart()

  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link to="/" className="logo">VÉLOX</Link>

        <nav className="nav" aria-label="Navigation principale">
          <ul>
            <li><NavLink to="/" end>Accueil</NavLink></li>
            <li><NavLink to="/catalogue">Catalogue</NavLink></li>
            <li><NavLink to="/a-propos">À propos</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link to="/panier" className="cart-btn" aria-label={`Panier, ${count} article${count > 1 ? 's' : ''}`}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 7h12l-1 13H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <span className="cart-label">Panier</span>
            <b className="cart-count">{count}</b>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
