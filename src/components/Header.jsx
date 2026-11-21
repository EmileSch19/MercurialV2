import { Link, NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header className="navbar">
      <Link to="/" className="logo">Mercurial</Link>

      <nav className="nav" aria-label="Main navigation">
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
