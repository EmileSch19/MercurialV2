import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Catalogue from './pages/Catalogue'
import ProductPage from './pages/ProductPage'
import Cart from './pages/Cart'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './pages/style.css'

const App = () => {
  const { pathname } = useLocation()

  // Remonte en haut de page à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <Header />
      <main id="contenu">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/produit/:slug" element={<ProductPage />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<Navigate to="/a-propos" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
