import React from 'react'

import Main from '../components/Main'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='container'>
      <Main />
      <Product />
      <Banner />
      <Newsletter />
    </div>
  )
}

export default Home