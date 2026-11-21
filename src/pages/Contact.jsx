import { useState } from "react"
import usePageTitle from "../usePageTitle"

const emptyForm = { name: "", email: "", subject: "", message: "" }

const Contact = () => {
  usePageTitle("Contact")
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Démo front-end : aucun message n'est envoyé
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <section className="wrap section narrow">
      <h1 className="h1 h1-page">Contact</h1>
      <p className="lead">Une question sur une pointure ou une commande ? Écrivez-nous.</p>

      <div className="contact-grid">
        {sent ? (
          <div className="panel" role="status">
            <p className="success">Merci, votre message a bien été reçu (démo : rien n’est réellement envoyé).</p>
            <button type="button" className="btn btn-ghost" onClick={() => setSent(false)}>Envoyer un autre message</button>
          </div>
        ) : (
          <form className="panel form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nom</label>
            <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />

            <label htmlFor="email">E-mail</label>
            <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} />

            <label htmlFor="subject">Objet</label>
            <input id="subject" name="subject" type="text" value={form.subject} onChange={update} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={update}></textarea>

            <button type="submit" className="btn">Envoyer</button>
          </form>
        )}

        <div className="contact-info">
          <div>
            <h2 className="card-title">Où</h2>
            <p className="muted">Lyon, France</p>
          </div>
          <div>
            <h2 className="card-title">Horaires</h2>
            <p className="muted">Lun – ven<br />9 h – 18 h</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
