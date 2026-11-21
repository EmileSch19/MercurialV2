# Mercurial Shop

Storefront for football boots built with React. Student project by Emile Dufoulon, not affiliated with Nike.

**Live:** https://mercurial-v2.vercel.app/

## Stack

- React 19 + Vite
- React Router 7 (pages: Home, About, Contact, 404)
- CSS (no framework), Font Awesome
- Deployed on Vercel (`vercel.json` sends every route to `index.html`)

## Run locally

```bash
npm install
npm run dev      # development server
npm run build    # production build in dist/
npm run lint
```

## Structure

```
src/
  App.jsx          routes + shared layout (Header, Footer)
  pages/           Home, About, Contact, NotFound, style.css
  components/      Hero, Product, Banner, Newsletter, Testimonial, Team…
  assets/          product images
```

The contact and newsletter forms are front-end only: they validate the input and show a confirmation, but nothing is sent.
