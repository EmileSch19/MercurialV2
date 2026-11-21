# Vélox — boutique de crampons (React)

Mini-boutique e-commerce front-end pour une marque fictive de crampons de football. Projet étudiant d'Emile Dufoulon : produits, prix et visuels sont des exemples, aucun paiement n'est réel.

**En ligne :** https://mercurial-v2.vercel.app/

## Fonctionnalités

- Catalogue filtrable par terrain et triable par prix (filtres gardés dans l'URL : `/catalogue?cat=fg&tri=asc`)
- Fiche produit (`/produit/:slug`) avec choix de la pointure et produits de la même catégorie
- Panier mémorisé dans le navigateur (`localStorage`) : quantités, suppression, total, commande de démonstration
- Mode clair / sombre (préférence système par défaut, choix mémorisé, sans flash au chargement)
- Responsive, navigable au clavier (lien d'évitement, focus visibles, libellés de formulaires)

## Stack

React 19 · React Router 7 · Vite · CSS sans framework (variables par thème) · Fontsource (Space Grotesk, Inter) · Vercel

## Lancer le projet

```bash
npm install
npm run dev      # serveur de développement
npm run build    # build de production dans dist/
npm run lint
```

## Structure

```
src/
  data/products.js        catalogue (ajouter un produit = ajouter un objet)
  context/CartContext.jsx panier (useReducer + localStorage)
  components/             Header, Footer, ProductCard, BootIllustration, ThemeToggle, Newsletter
  pages/                  Home, Catalogue, ProductPage, Cart, About, Contact, NotFound, style.css
```

Les formulaires (contact, newsletter) valident la saisie et affichent une confirmation, mais n'envoient rien.
