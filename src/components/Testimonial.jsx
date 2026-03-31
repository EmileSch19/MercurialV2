import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Testimonial = () => {
  return (
    <div className="glass">
      <h1>Testimonials</h1>
      <p>People love this</p>

      <div className="boxes">

        <div className="card">
          <h3>Amazing</h3>
          <FontAwesomeIcon icon={faStar} />
          <p>Max.G leclerc</p>
        </div>

        <div className="card">
          <h3>Very light</h3>
          <FontAwesomeIcon icon={faStar} />
          <p>Ketia A</p>
        </div>

        <div className="card">
          <h3>Of Course</h3>
          <FontAwesomeIcon icon={faStar} />
          <p>Momohito</p>
        </div>

      </div>
    </div>
  )
}

export default Testimonial