import M1 from '../assets/ZM+VAPOR+16+ELITE+FG (1).avif'
import M2 from '../assets/ZM+VAPOR+16+ELITE+FG.avif'
import M3 from '../assets/ZM+VAPOR+16+ELITE+FG+LV8.avif'

const products = [
  { id: 1, name: 'Vapor 16 Elite FG', variant: 'Colorway 1', price: '250 €', image: M1 },
  { id: 2, name: 'Vapor 16 Elite FG', variant: 'Colorway 2', price: '250 €', image: M2 },
  { id: 3, name: 'Vapor 16 Elite FG LV8', variant: 'Limited edition', price: '250 €', image: M3 },
]

const Product = () => {
  return (
    <section className="glass" id="products">
      <h2>Products</h2>
      <div className="boxes">
        {products.map((p) => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={`${p.name} — ${p.variant}`} className="product-img" loading="lazy" />
            <h3>{p.name}</h3>
            <span>{p.variant}</span>
            <p className="price">{p.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Product
