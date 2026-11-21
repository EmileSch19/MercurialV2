import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Démo front-end : aucun e-mail n'est envoyé
    setSent(true)
    setEmail('')
  }

  return (
    <section className="wrap section">
      <div className="panel newsletter">
        <div>
          <h2 className="h2">Newsletter</h2>
          <p className="muted">Les nouveautés et les réassorts en premier.</p>
        </div>
        {sent ? (
          <p className="success" role="status">Merci, c’est noté ! (démo : aucun e-mail n’est envoyé)</p>
        ) : (
          <form className="inline-form" onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">Adresse e-mail</label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="vous@exemple.fr"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn">S’inscrire</button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Newsletter
