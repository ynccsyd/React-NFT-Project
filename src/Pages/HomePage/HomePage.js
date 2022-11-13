import React from "react";
import MyNavbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import RoadMap from "../../components/RoadMap/RoadMap";
import Info from "../../components/Info/Info";
import CarouselNft from "../../components/Carousel/Carousel";
import NftWallets from "../../components/Wallets/Wallets";

const HomePage = () => {
  return (
    <div>
      <MyNavbar />
      <Intro />
      <Info />
      <RoadMap />
      <NftWallets />
      <CarouselNft />
      <Footer />
    </div>
  );
};

export default HomePage;
