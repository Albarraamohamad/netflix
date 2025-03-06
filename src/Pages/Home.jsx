import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import ApiMovies from '../ApiMovies'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ApiMovies/>
      <Footer/>
    </div>
  )
}

export default Home
