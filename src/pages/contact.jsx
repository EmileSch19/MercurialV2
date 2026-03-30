import React from "react"
import "../pages/style.css"
import Footer from '../components/Footer'
import contactImg from "../assets/ZM+VAPOR+16+ELITE+FG (2).avif"

const Contact = () => {
  return (
    <>
    <div className="contact">

      <h2>Contact</h2>

      
      <div className="contact-top">
        
        
        <form className="form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>

        
        <div className="contact-img">
          <img src={contactImg} alt="contact" />
        </div>

      </div>

      <div className="contact-info">
        <div>
          <h4>Our office</h4>
          <p>123 Street<br />Paris</p>
        </div>

        <div>
          <h4>Open hours</h4>
          <p>Mon-Fri<br />9am - 6pm</p>
        </div>

        <div>
          <h4>Location</h4>
          <p>France<br />Lyon</p>
        </div>
      </div>

      <h3>Find us here</h3>

      <div className="map">
        <img src={contactImg} alt="map" />
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact