import { useState } from "react"
import contactImg from "../assets/ZM+VAPOR+16+ELITE+FG (2).avif"

const emptyForm = { name: "", email: "", subject: "", message: "" }

const Contact = () => {
  const [form, setForm] = useState(emptyForm)
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Démo front-end : pas encore de back-end, on confirme simplement côté client
    setSent(true)
    setForm(emptyForm)
  }

  return (
    <section className="contact">
      <h1>Contact</h1>

      <div className="contact-top">
        {sent ? (
          <div className="form form-success" role="status">
            <p>Thanks, your message has been received (demo — nothing is actually sent).</p>
            <button type="button" onClick={() => setSent(false)}>Send another message</button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={update} />

            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={update} />

            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" value={form.subject} onChange={update} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required value={form.message} onChange={update}></textarea>

            <button type="submit">Send</button>
          </form>
        )}

        <div className="contact-img">
          <img src={contactImg} alt="Mercurial Vapor 16 Elite FG boot" loading="lazy" />
        </div>
      </div>

      <div className="contact-info">
        <div>
          <h2>Location</h2>
          <p>Lyon, France</p>
        </div>

        <div>
          <h2>Open hours</h2>
          <p>Mon–Fri<br />9am – 6pm</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
