import React from 'react'
import Hero from './Hero'
import Navbar from './Navbar'
import '../App.css'
import ApiMovies from '../ApiMovies'

const NewPopular = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <ApiMovies/>
    </div>
  )
}

export default NewPopular
