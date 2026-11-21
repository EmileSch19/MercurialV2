import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './pages/style.css'

const titles = {
  '/': 'Mercurial Shop — Football boots',
  '/about': 'About — Mercurial Shop',
  '/contact': 'Contact — Mercurial Shop',
}

const App = () => {
  const { pathname } = useLocation()

  // Remonte en haut de page et met à jour le titre à chaque changement de route
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Page not found — Mercurial Shop'
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
