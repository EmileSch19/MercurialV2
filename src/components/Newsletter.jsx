import React from 'react'
import '../pages/style.css'
import elite from "../assets/ZM+VAPOR+16+ELITE+FG+LV8 (2).avif"

const Newsletter = () => {
  return (
    <>
    
      {/* Bloc 1 */}
      <div className="news">
        <div className="left">
          <img src={elite} alt="" />
        </div>

        <div className="right">
          <h1>Newsletter</h1>
          <p>Lorem ipsum dolor sit amet...</p>
          <button>Click</button>
        </div>
      </div>

      {/* Bloc 2 (inversé) */}
      <div className="news reverse">
        <div className="left">
          <img src={elite} alt="" />
        </div>

        <div className="right">
          <h1>Newsletter</h1>
          <p>Lorem ipsum dolor sit amet...</p>
          <button>Click</button>
        </div>
      </div>
    </>
  )
}

export default Newsletter
