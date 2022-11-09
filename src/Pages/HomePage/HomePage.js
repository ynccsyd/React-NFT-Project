import React from 'react'
import MyNavbar from "../../components/Navbar/index"
import Footer from "../../components/Footer/Footer"
import Intro from '../../components/Intro/Intro'
import CarouselNft from "../../components/Carousel/Carousel"
// import SIntro from "../../components/SIntro/SIntro"





const HomePage = () => {
  return (
    <div>
      <MyNavbar/>
      <Intro/>
      {/* <SIntro/> */}
      <img src=''></img>
      <CarouselNft/>
      
    
      <Footer/>
    </div>
  )
}

export default HomePage