import React from 'react'
import MyNavbar from "../../components/Navbar/index"
import Footer from "../../components/Footer/Footer"
import Intro from '../../components/Intro/Intro'
import Info from '../../components/Info/Info'
import CarouselNft from "../../components/Carousel/Carousel"






const HomePage = () => {
  return (
    <div>
      <MyNavbar/>
      <Intro/>
      <Info/>
      <CarouselNft/>
      
    
      <Footer/>
    </div>
  )
}

export default HomePage