import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'
import { getProduct } from '../data/products'

const STORAGE_KEY = 'velox-cart'
const CartContext = createContext(null)

// Une ligne de panier = un produit dans une pointure donnée
const lineId = (slug, size) => `${slug}-${size}`

function reducer(lines, action) {
  switch (action.type) {
    case 'add': {
      const id = lineId(action.slug, action.size)
      const existing = lines.find((l) => l.id === id)
      if (existing) return lines.map((l) => (l.id === id ? { ...l, qty: Math.min(l.qty + 1, 10) } : l))
      return [...lines, { id, slug: action.slug, size: action.size, qty: 1 }]
    }
    case 'setQty':
      return lines
        .map((l) => (l.id === action.id ? { ...l, qty: Math.max(0, Math.min(action.qty, 10)) } : l))
        .filter((l) => l.qty > 0)
    case 'remove':
      return lines.filter((l) => l.id !== action.id)
    case 'clear':
      return []
    default:
      return lines
  }
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    // On ignore les produits qui n'existent plus dans le catalogue
    return Array.isArray(saved) ? saved.filter((l) => getProduct(l.slug) && l.qty > 0) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [lines, dispatch] = useReducer(reducer, undefined, loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
    } catch {
      // stockage indisponible (navigation privée…) : le panier reste en mémoire
    }
  }, [lines])

  const value = useMemo(() => {
    const detailed = lines.map((l) => ({ ...l, product: getProduct(l.slug) }))
    return {
      lines: detailed,
      count: lines.reduce((n, l) => n + l.qty, 0),
      total: detailed.reduce((sum, l) => sum + l.qty * l.product.price, 0),
      add: (slug, size) => dispatch({ type: 'add', slug, size }),
      setQty: (id, qty) => dispatch({ type: 'setQty', id, qty }),
      remove: (id) => dispatch({ type: 'remove', id }),
      clear: () => dispatch({ type: 'clear' }),
    }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart doit être utilisé dans <CartProvider>')
  return ctx
}
