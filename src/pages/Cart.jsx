import { useState } from 'react'
import { Link } from 'react-router-dom'
import BootIllustration from '../components/BootIllustration'
import { formatPrice } from '../data/products'
import { useCart } from '../context/CartContext'
import usePageTitle from '../usePageTitle'

const Cart = () => {
  usePageTitle('Panier')
  const { lines, total, count, setQty, remove, clear } = useCart()
  const [ordered, setOrdered] = useState(false)

  const order = () => {
    clear()
    setOrdered(true)
  }

  if (ordered) {
    return (
      <section className="wrap section empty">
        <h1 className="h1 h1-page">Commande enregistrée</h1>
        <p className="lead" role="status">Merci ! C’est une démo : aucun paiement n’a été effectué et rien ne sera livré.</p>
        <Link to="/catalogue" className="btn">Retour au catalogue</Link>
      </section>
    )
  }

  if (lines.length === 0) {
    return (
      <section className="wrap section empty">
        <h1 className="h1 h1-page">Votre panier est vide</h1>
        <p className="lead">Choisissez un modèle et une pointure pour commencer.</p>
        <Link to="/catalogue" className="btn">Voir le catalogue</Link>
      </section>
    )
  }

  return (
    <section className="wrap section">
      <h1 className="h1 h1-page">Panier</h1>
      <div className="cart-grid">
        <ul className="cart-lines">
          {lines.map((l) => (
            <li key={l.id} className="cart-line">
              <Link to={`/produit/${l.slug}`} className="cart-thumb" aria-label={l.product.name}>
                <BootIllustration colors={l.product.colors} />
              </Link>
              <div className="cart-info">
                <Link to={`/produit/${l.slug}`} className="card-title">{l.product.name}</Link>
                <p className="muted">Pointure {l.size} · {formatPrice(l.product.price)}</p>
                <button type="button" className="text-link" onClick={() => remove(l.id)}>Retirer</button>
              </div>
              <div className="qty" role="group" aria-label={`Quantité pour ${l.product.name}, pointure ${l.size}`}>
                <button type="button" onClick={() => setQty(l.id, l.qty - 1)} aria-label="Retirer un">−</button>
                <span aria-live="polite">{l.qty}</span>
                <button type="button" onClick={() => setQty(l.id, l.qty + 1)} aria-label="Ajouter un" disabled={l.qty >= 10}>+</button>
              </div>
              <p className="price">{formatPrice(l.qty * l.product.price)}</p>
            </li>
          ))}
        </ul>

        <aside className="panel summary" aria-label="Récapitulatif">
          <h2 className="card-title">Récapitulatif</h2>
          <div className="summary-row"><span>{count} article{count > 1 ? 's' : ''}</span><span>{formatPrice(total)}</span></div>
          <div className="summary-row"><span>Livraison</span><span>Offerte (démo)</span></div>
          <div className="summary-row total"><span>Total</span><span>{formatPrice(total)}</span></div>
          <button type="button" className="btn btn-full" onClick={order}>Commander (démo)</button>
          <p className="muted small">Aucun paiement réel : cette boutique est un projet étudiant.</p>
        </aside>
      </div>
    </section>
  )
}

export default Cart
