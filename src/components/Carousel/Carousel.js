import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import Heading from "./Heading";
import "./Carousel.css"


const ExpNfts = [
  {
    id: "1",
    name: "Everydays: The First 5000 Days",
    soldFor_1: "ETH 38525",
    soldFor_2: "$69.3 million",
    image: "https://ipfsgateway.makersplace.com/ipfs/QmZ15eQX8FPjfrtdX3QYbrhZxJpbLpvDpsgb2p3VEH8Bqq",
    description: "I made a picture from start to finish every single day from May 1st, 2007 - January 7th, 2021.  This is every motherfucking one of those pictures.",
    saleDetails:" The most famous NFT sale (and the most expensive NFT sale to date",
    date:"March 2021",
    artist:"Beeple"
},
  {
    id: "2",
    name: "Clock",
    soldFor_1: "ETH 16953",
    soldFor_2: "$52.7 million",
    image: "https://openseauserdata.com/files/4f61391239bf737ca9fa0e1949ec21d0.svg",
    description: "one thousand two hundred eighty one",
    saleDetails:" Pak has remained anonymous throughout their entire career, while simultaneously becoming one of the highest-grossing living artists",
    date:" February 2022",
    artist:"Julian Assange ve Pak"
  },
  {
    id: "3",
    name: "Human One",
    soldFor_1: "ETH 4700",
    soldFor_2: "$28.9 milyon",
    image: "https://im3.ezgif.com/tmp/ezgif-3-8b263771a8.gif",
    description: "millions of voices suddenly cried in terror and were suddenly silenced",
    saleDetails:" HUMAN ONE is an NFT like no other.",
    date:" November 2021",
    artist:"Beeple"
  },
  {
    id: "4",
    name: "CryptoPunk #5822",
    soldFor_1: "ETH 8000",
    soldFor_2: "$23.7 million",
    image: "https://www.larvalabs.com/cryptopunks/cryptopunk5822.png",
    description: "Alien",
    saleDetails:" Pak has remained anonymous throughout their entire career, while simultaneously becoming one of the highest-grossing living artists",
    date:" February 2022",
    artist:"Larva Labs"
  },
  {
    id: "5",
    name: "CryptoPunk #7523",
    soldFor_1: "ETH 4700",
    soldFor_2: "$52.7 million",
    image: "https://www.larvalabs.com/cryptopunks/cryptopunk7523.png",
    description: "COVID Alien",
    saleDetails:"The original minter of #7523, Straybits, and the Punk’s second-ever collector, Sillytuna (who supplied it for auction), are both prominent parts of the NFT community. ",
    date:" June 2021",
    artist:"Larva Labs"
  },
  {
    id: "6",
    name: "Tpunk #3442,Joker",
    soldFor_1: "120 M TRX",
    soldFor_2: "$10.5 million",
    image: "https://images.apenft.io/nft/img/tron/0x2b6653dc/5378211184082632623_1075501149.png",
    description: "one thousand two hundred eighty one",
    saleDetails:" This rare “Joker” Tpunk was purchased by TRON founder Justin Sun ",
    date:" August 2021",
    artist:"Mondiblo and Bastardbe"
  },
  {
    id: "7",
    name: "CryptoPunk #4156",
    soldFor_1: "ETH 2500",
    soldFor_2: "$10.2 million",
    image: "https://www.larvalabs.com/cryptopunks/cryptopunk4156.png",
    description: "Ape",
    saleDetails:" Although CryptoPunk #4156 wasn’t the highest selling NFT from the CryptoPunk family, it was undoubtedly the most famous NFT trade for a Punk in 2021. That’s because bandana ape #4156 had become synonymous with the personality of prominent NFT influencer and builder Punk4156",
    date:"  December 2021",
    artist:"Larva Labs"
  },
  {
    id: "8",
    name: "Ringers #109",
    soldFor_1: "ETH 2100",
    soldFor_2: "$7.1 million",
    image: "https://media.artblocks.io/13000109.png",
    description: "There are an almost infinite number of ways to wrap a string around a set of pegs. On the surface it may seem like a simple concept but prepare to be surprised and delighted at the variety of combinations the algorithm can produce. Each output from 'Ringers' is derived from a unique transaction hash and generated in Javascript in the browser. Feature variations include peg count, sizing, layout, wrap orientation, and a few colorful flourishes for good measure.",
    saleDetails:" Ringers was one of the first projects to launch in 2021. In addition to its historic significance in the NFT space, it’s also one of the most popular Art Blocks Curated collections.",
    date:" October 2021",
    artist:"Dmitri Cherniak"
  },
  {
    id: "9",
    name: "Right-click and Save As Guy",
    soldFor_1: "ETH 1600",
    soldFor_2: "$7 million",
    image: "https://ipfs.pixura.io/ipfs/QmTA9VN19dxgFEF1H1dJZvmBCFsZRryBBnLKfUJZzFXNmU",
    description: "Why would I buy it when I can right click and save as?",
    saleDetails:" The legend of XCOPY’s “Right-click and Save As Guy” goes back far beyond the days of our current NFT ecosystem. It was minted years ago, on December 6, 2018. The iconic piece helped signal a shift in public perception about NFTs when it was featured on BBC World News, shortly after Beeple’s landmark Everydays auction. As this famous NFT art had only changed hands twice before this latest sale — first for $90 (1 ETH) and then for $174,195 (99 ETH) — de’ Medici’s buy marked more than a 3,500 percent increase in the value of the artwork. ",
    date:" December 2021",
    artist:"XCOPY"
  },
  {
    id: "10",
    name: " All Time High in the City",
    soldFor_1: "ETH 1630 ",
    soldFor_2: "$6.2 million ",
    image: "https://ipfs.pixura.io/ipfs/QmVUyCyML8XRX3FAZMpatZxFQKvD2jY1qFTUawZSjwRyHn",
    description: "XCOPY, 2018",
    saleDetails:"  Known for dark, abstract, and dystopian illustrations, the London-based XCOPY often uses motion, flickering, or glitching effects in his pieces.  ",
    date:" January 2022",
    artist:"XCOPY"
  },
  {
    id: "11",
    name: " FreeRoss",
    soldFor_1: "ETH 1489",
    soldFor_2: "$6.12 million ",
    image: "https://ipfs.pixura.io/ipfs/Qmdfr7QKy5d6FUkzXySYuVxm5kKLtrHi3d8mfAaAyqniqg/Perspective_Ross_Drawing_HD.png",
    description: "“Perspective” is a graphite pencil drawing created in prison. It is part of a unique collection of writings and 10 artworks by Ross Ulbricht, from early childhood to teen to prisoner. The collection also includes a 2m40s original animation by Levitate, created in collaboration with Ross. Once the auction is won, the entire collection will be compiled into one singular NFT using Kanon’s KSPEC protocol",
    saleDetails:"  Creator of online black market Silk Road, Ulbricht is unequivocally tied to the history of blockchain tech. With his genesis collection presented via the FreeRossDAO (who were also the NFT’s buyers), Ulbricht was able to solidify his name on the blockchain in a new and innovative way, effectively adding a positive spin to his legacy as he continues to serve life in prison. ",
    date:" December 2021",
    artist:"Ross Ulbricht"
  },
  {
    id: "12",
    name: " A Coin for the Ferryman",
    soldFor_1: "ETH 1330  ",
    soldFor_2: "$6.02 million ",
    image: "https://ipfs.pixura.io/ipfs/QmSJjfxcn8ki9SDhUtgefpLX6aS7RNFSEZ1xXgR8vTUVXm",
    description: "XCOPY, 2018",
    saleDetails:"Similar to his other high-value pieces, A Coin for the Ferryman can be traced back to the beginning of the enigmatic creator’s career as a crypto-artist.",
    date:" November 2021",
    artist:"XCOPY"
  },
];

function CarouselNft() {
  return (
    <div className="c-div">
      <Heading title={"The Most Expensive NFT Sales"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {ExpNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-0 bg-subMain flex-colo"
          >
            <div className="c-img">
              <img src={t.image} alt={t.name} className="img" />
              <div className="overlay">
                <div className="over-text">
                  <p className="text">{t.name}</p>
                  <p className="text-price">{t.soldFor_1}</p>
                  <p className="text-priceD">{t.soldFor_2}</p>
                </div>

              </div>
            </div>

            {/* <button  className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button> */}
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default CarouselNft;