import React from 'react'
import Hero from '../Components/Sections/Hero'
import Header from '../Components/Layouts/Header'
import Footer from '../Components/Layouts/Footer'


const Home = () => {
  return (
    <div className="homeBg">
      <Header />
      <Hero />
      <Footer/>
    </div>
  )
}

export default Home