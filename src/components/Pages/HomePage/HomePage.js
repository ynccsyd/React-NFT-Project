import React from 'react'
import MyNavbar from '../../Navbar'
import Footer from "../../Footer/Footer"
import Intro from '../../Intro/Intro'
import CarouselNft from "../../Carousel/Carousel"




const HomePage = () => {
  return (
    <div>
      <MyNavbar/>
      <Intro/>
      <CarouselNft/>
    
      <Footer/>
    </div>
  )
}

export default HomePage