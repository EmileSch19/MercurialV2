import { useState } from 'react'
import elite from "../assets/ZM+VAPOR+16+ELITE+FG+LV8 (2).avif"
import elite2 from "../assets/ZM+VAPOR+16+ELITE+FG+LV8 (1).avif"

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Démo front-end : pas encore de back-end, on confirme simplement côté client
    setSent(true)
    setEmail('')
  }

  return (
    <>
      {/* Bloc 1 : inscription newsletter */}
      <section className="news">
        <div className="left">
          <img src={elite} alt="Vapor 16 Elite FG LV8, side view" loading="lazy" />
        </div>

        <div className="right">
          <h2>Newsletter</h2>
          <p>Get new releases and restocks first.</p>
          {sent ? (
            <p className="form-success" role="status">Thanks! You're on the list (demo — no email is actually sent).</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* Bloc 2 (inversé) : mise en avant de l'édition limitée */}
      <section className="news reverse">
        <div className="left">
          <img src={elite2} alt="Vapor 16 Elite FG LV8, top view" loading="lazy" />
        </div>

        <div className="right">
          <h2>Limited edition</h2>
          <p>The Vapor 16 Elite FG LV8 colorway, available in limited quantities.</p>
          <a href="#products" className="cta-1">See the products</a>
        </div>
      </section>
    </>
  )
}

export default Newsletter
