import React from 'react'
import Header from '../components/Header'
import Temp from '../components/Temp'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'
import Contact from '..components/Contact'
import About from './about'

const Home = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <Temp />
      <Product />
      <Banner />
      <About />
      <Newsletter />
      <Contact />
    </div>
    </>
  )
}

export default Home