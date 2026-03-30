import React from 'react'
import nike from "../assets/nike.png"

const banner2 = () => {
  return (
    <>
    <div className="about">
  <h2>About</h2>
  <p>Lorem text about company</p>

  <div className="about-image">
    <img src={nike} alt="about" />
  </div>
</div>
    </>
  )
}

export default banner2