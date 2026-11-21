import { Link } from 'react-router-dom'
import BootIllustration from '../components/BootIllustration'
import ProductCard from '../components/ProductCard'
import { products, formatPrice } from '../data/products'
import usePageTitle from '../usePageTitle'
import Newsletter from '../components/Newsletter'

const Home = () => {
  usePageTitle(null)
  const featured = products[0]

  return (
    <>
      <section className="wrap hero">
        <div>
          <p className="eyebrow">Nouvelle collection</p>
          <h1 className="h1">Plus vite que le jeu.</h1>
          <p className="lead">Crampons de vitesse, du terrain sec au synthétique.</p>
          <div className="ctas">
            <Link to="/catalogue" className="btn">Voir le catalogue</Link>
            <Link to={`/produit/${featured.slug}`} className="btn btn-ghost">
              {featured.name} — {formatPrice(featured.price)}
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <BootIllustration colors={featured.colors} />
        </div>
      </section>

      <section className="wrap section">
        <div className="section-head">
          <h2 className="h2">À la une</h2>
          <Link to="/catalogue" className="text-link">Tout le catalogue →</Link>
        </div>
        <div className="grid">
          {products.slice(0, 4).map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
