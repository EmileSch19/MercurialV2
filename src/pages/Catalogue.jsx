import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CATEGORIES, products } from '../data/products'
import usePageTitle from '../usePageTitle'

const SORTS = {
  default: { label: 'Nouveautés', fn: () => 0 },
  asc: { label: 'Prix croissant', fn: (a, b) => a.price - b.price },
  desc: { label: 'Prix décroissant', fn: (a, b) => b.price - a.price },
}

const Catalogue = () => {
  usePageTitle('Catalogue')
  const [params, setParams] = useSearchParams()
  const cat = CATEGORIES.some((c) => c.id === params.get('cat')) ? params.get('cat') : 'all'
  const sort = SORTS[params.get('tri')] ? params.get('tri') : 'default'

  const update = (key, value, fallback) => {
    const next = new URLSearchParams(params)
    if (value === fallback) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const list = products
    .filter((p) => cat === 'all' || p.category === cat)
    .sort(SORTS[sort].fn)

  return (
    <section className="wrap section">
      <h1 className="h1 h1-page">Catalogue</h1>

      <div className="toolbar">
        <div className="chips" role="group" aria-label="Filtrer par terrain">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className={`chip${cat === c.id ? ' is-on' : ''}`}
              aria-pressed={cat === c.id}
              onClick={() => update('cat', c.id, 'all')}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="sort">
          <span className="muted">Trier</span>
          <select value={sort} onChange={(e) => update('tri', e.target.value, 'default')}>
            {Object.entries(SORTS).map(([id, s]) => <option key={id} value={id}>{s.label}</option>)}
          </select>
        </label>
      </div>

      <p className="muted" aria-live="polite">{list.length} modèle{list.length > 1 ? 's' : ''}</p>
      <div className="grid">
        {list.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  )
}

export default Catalogue
