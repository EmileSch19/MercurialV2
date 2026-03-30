import React from 'react'
import '../pages/style.css'
import M1 from'../assets/ZM+VAPOR+16+ELITE+FG (1).avif'
import M2 from'../assets/ZM+VAPOR+16+ELITE+FG.avif'
import M3 from'../assets/ZM+VAPOR+16+ELITE+FG+LV8.avif'



const product = () => {
  return (
    <>
    <div className="glass">
        <h1>Product</h1>
      <div className="boxes">
         <div className="card">
          <img src={M1} alt="M1" className="product-img" />
        <h3>Decouvrez</h3>
        <p>250€</p>
      </div>
      <div className="card">
        <img src={M2} alt="M1" className="product-img" />
        <h3>Decouvrez</h3>
        <p>250€</p>
      </div>
      <div className="card">
        <img src={M3} alt="M1" className="product-img" />
        <h3>Decouvrez</h3>
        <p>250€</p>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default product