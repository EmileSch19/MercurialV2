import { Link } from 'react-router-dom'
import usePageTitle from '../usePageTitle'

const About = () => {
  usePageTitle('À propos')

  return (
    <section className="wrap section narrow">
      <h1 className="h1 h1-page">À propos</h1>
      <p className="lead">
        Vélox est une boutique fictive de crampons de football, créée comme projet front-end par Emile Dufoulon.
      </p>

      <div className="panel stack">
        <h2 className="card-title">Ce que montre le projet</h2>
        <ul className="features">
          <li>Catalogue filtrable par terrain et triable par prix, avec les filtres gardés dans l’URL.</li>
          <li>Fiche produit avec choix de la pointure.</li>
          <li>Panier mémorisé dans le navigateur (quantités, suppression, total).</li>
          <li>Mode clair et mode sombre, interface utilisable au clavier et sur mobile.</li>
        </ul>
        <p className="muted">
          Stack : React 19, React Router 7, Vite, CSS sans framework. Les produits, les prix et les visuels sont des exemples.
        </p>
      </div>

      <div className="ctas">
        <Link to="/catalogue" className="btn">Voir le catalogue</Link>
        <a href="https://github.com/EmileSch19/MercurialV2" className="btn btn-ghost" target="_blank" rel="noreferrer">Code source</a>
      </div>
    </section>
  )
}

export default About
