import React from 'react'

import Temp from '../components/Temp'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import Contact from '../pages/contact'
import Testamonial from '../components/Testamonial'
import About from '../pages/about'


const Home = () => {
  return (
    <div className='container'>
      <Temp />
      <Product />
      <Banner />
      <Newsletter />
      <Testamonial/>
      <About />
      <Contact />
    </div>
  )
}

export default Home