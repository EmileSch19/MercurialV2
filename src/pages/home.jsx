import React from 'react'
import Header from '../components/header'
import Main from '../components/main'
import Product from '../components/product'
import Banner from '../components/banner'
import Newsletter from '../components/newsletter'







const Home = () => {
  return (
    <>
    <Header/>
    <div className='container'>
      <Main/>
      <Product />
      <Banner/>
      <Newsletter />

   </div>
   
    </>
  )
}

export default Home