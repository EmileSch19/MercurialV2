import { Link } from 'react-router-dom'
import usePageTitle from '../usePageTitle'

const NotFound = () => {
  usePageTitle('Page introuvable')

  return (
    <section className="wrap section empty">
      <h1 className="h1 h1-page">Page introuvable</h1>
      <p className="lead">Cette page n’existe pas ou a été déplacée.</p>
      <Link to="/" className="btn">Retour à l’accueil</Link>
    </section>
  )
}

export default NotFound
