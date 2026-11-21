import Hero from '../components/Hero'
import Product from '../components/Product'
import Banner from '../components/Banner'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <Product />
      <Banner />
      <Newsletter />
    </div>
  )
}

export default Home
