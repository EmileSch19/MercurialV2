// Catalogue de démonstration — marque fictive Vélox, prix d'exemple.
// Pour ajouter un produit : copier un objet, changer slug/nom/prix/couleurs.

export const CATEGORIES = [
  { id: 'all', label: 'Tous' },
  { id: 'fg', label: 'Terrain sec' },
  { id: 'ag', label: 'Synthétique' },
  { id: 'indoor', label: 'Salle & stabilisé' },
]

export const products = [
  {
    slug: 'sprint-fg',
    name: 'Vélox Sprint FG',
    category: 'fg',
    tag: 'Nouveau',
    price: 249,
    description: 'Le modèle phare de la gamme : tige fine et semelle à crampons pour terrain sec.',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: { upper: '#1C1C21', stripe: '#E0241A', sole: '#E4E4E7' },
  },
  {
    slug: 'sprint-ag',
    name: 'Vélox Sprint AG',
    category: 'ag',
    tag: null,
    price: 229,
    description: 'La Sprint adaptée aux terrains synthétiques, avec des crampons plus nombreux et plus courts.',
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: { upper: '#1D4ED8', stripe: '#F4F4F5', sole: '#18181B' },
  },
  {
    slug: 'flux-elite-fg',
    name: 'Vélox Flux Elite FG',
    category: 'fg',
    tag: 'Édition limitée',
    price: 279,
    description: 'Édition limitée de la Flux, coloris rouge et noir, pour terrain sec.',
    sizes: [40, 41, 42, 43, 44],
    colors: { upper: '#B91C1C', stripe: '#0B0B0C', sole: '#0B0B0C' },
  },
  {
    slug: 'flux-academy',
    name: 'Vélox Flux Academy',
    category: 'fg',
    tag: null,
    price: 119,
    description: 'La Flux en version entraînement : même silhouette, prix plus accessible.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46],
    colors: { upper: '#F4F4F5', stripe: '#1C1C21', sole: '#E0241A' },
  },
  {
    slug: 'pulse-tf',
    name: 'Vélox Pulse TF',
    category: 'indoor',
    tag: null,
    price: 89,
    description: 'Semelle à picots pour les terrains stabilisés et le five.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: { upper: '#3F3F46', stripe: '#FACC15', sole: '#27272A' },
  },
  {
    slug: 'pulse-ic',
    name: 'Vélox Pulse IC',
    category: 'indoor',
    tag: null,
    price: 79,
    description: 'Semelle plate en gomme pour le futsal et les sols de salle.',
    sizes: [38, 39, 40, 41, 42, 43, 44, 45],
    colors: { upper: '#0F766E', stripe: '#F4F4F5', sole: '#D6D3D1' },
  },
]

export const getProduct = (slug) => products.find((p) => p.slug === slug)

export const formatPrice = (value) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value)
