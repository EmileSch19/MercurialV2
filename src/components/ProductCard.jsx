import { Link } from 'react-router-dom'
import BootIllustration from './BootIllustration'
import { CATEGORIES, formatPrice } from '../data/products'

const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label

const ProductCard = ({ product }) => {
  return (
    <article className="card">
      <Link to={`/produit/${product.slug}`} className="card-link">
        <div className="card-visual">
          <BootIllustration colors={product.colors} />
          {product.tag && <span className="badge">{product.tag}</span>}
        </div>
        <div className="card-body">
          <h3 className="card-title">{product.name}</h3>
          <p className="muted">{categoryLabel(product.category)}</p>
          <p className="price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
