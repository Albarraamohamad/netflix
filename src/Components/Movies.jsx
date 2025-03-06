import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import ApiMovies from '../ApiMovies'

const Movies = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ApiMovies/>
    </div>
  )
}

export default Movies
