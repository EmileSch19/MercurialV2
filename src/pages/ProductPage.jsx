import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import BootIllustration from '../components/BootIllustration'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, formatPrice, getProduct, products } from '../data/products'
import { useCart } from '../context/CartContext'
import usePageTitle from '../usePageTitle'
import NotFound from './NotFound'

// La clé remet à zéro la pointure choisie quand on passe d'un produit à l'autre
const ProductPage = () => {
  const { slug } = useParams()
  return <ProductView key={slug} slug={slug} />
}

const ProductView = ({ slug }) => {
  const product = getProduct(slug)
  usePageTitle(product?.name ?? 'Produit introuvable')
  const { add } = useCart()
  const [size, setSize] = useState(null)
  const [error, setError] = useState(false)
  const [added, setAdded] = useState(null)

  if (!product) return <NotFound />

  const handleAdd = () => {
    if (!size) {
      setError(true)
      return
    }
    add(product.slug, size)
    setAdded(size)
    setError(false)
  }

  const category = CATEGORIES.find((c) => c.id === product.category)?.label
  const related = products.filter((p) => p.slug !== product.slug && p.category === product.category).slice(0, 3)

  return (
    <>
      <section className="wrap section product">
        <nav className="breadcrumb muted" aria-label="Fil d’Ariane">
          <Link to="/catalogue">Catalogue</Link> / <Link to={`/catalogue?cat=${product.category}`}>{category}</Link>
        </nav>

        <div className="product-grid">
          <div className="product-visual">
            <BootIllustration colors={product.colors} />
            {product.tag && <span className="badge">{product.tag}</span>}
          </div>

          <div>
            <h1 className="h1 h1-page">{product.name}</h1>
            <p className="price price-lg">{formatPrice(product.price)}</p>
            <p className="lead">{product.description}</p>

            <fieldset className="sizes">
              <legend>Pointure (EU)</legend>
              <div className="size-grid">
                {product.sizes.map((s) => (
                  <label key={s} className={`size${size === s ? ' is-on' : ''}`}>
                    <input
                      type="radio"
                      name="size"
                      value={s}
                      checked={size === s}
                      onChange={() => { setSize(s); setError(false); setAdded(null) }}
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>
            {error && <p className="error" role="alert">Choisissez une pointure.</p>}

            <button type="button" className="btn btn-full" onClick={handleAdd}>Ajouter au panier</button>
            <p className="success" role="status">
              {added && <>Ajouté au panier (pointure {added}). <Link to="/panier">Voir le panier</Link></>}
            </p>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="wrap section">
          <h2 className="h2">Dans la même catégorie</h2>
          <div className="grid">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </>
  )
}

export default ProductPage
