import React from 'react'

import Temp from '../components/Temp'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import Header from '../components/Header'



const Home = () => {
  return (
    <div className='container'>
      <Temp />
      <Product />
      <Banner />
      <Newsletter />
    </div>
  )
}

export default Home
