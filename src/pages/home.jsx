import React from 'react'
import Header from '../components/Header'
import Temp from '../components/Temp'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <Temp />
      <Product />
      <Banner />
      <Newsletter />
    </div>
    </>
  )
}

export default Home