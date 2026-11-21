import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>Page not found</h1>
      <p>This page doesn't exist or has been moved.</p>
      <Link to="/" className="cta-1">Back to home</Link>
    </section>
  )
}

export default NotFound
