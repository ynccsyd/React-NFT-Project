import React from "react";
import Button from "../Button/index";
import "./Intro.css";
import introNft from "../images/introNft.png";
import Typewriter from "typewriter-effect";
import Infinite from "../images/infinite-loader.gif"
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="img-intro-nft">
          <img src={introNft} alt="nft" />
        </div>
      </div>
      <div className="i-right">
        <div className="i-nftheading">
          <span>Welcome to </span>
          <span>
            NFTs 
            <img src={Infinite} alt="" className="infinite"  />
    
          </span>
      
          <span>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("World!")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Explore, Create or Buy")
                  .pauseFor(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>

          <span>
            Nft (Non-fungible token): A cryptographic asset on a blockchain with
            unique identification codes and metadata that distinguish them from
            each other.
          </span>
          <span>
            <Button btnType="PRIMARY" btnText="EXPLORE" />
            <Button
              btnType="SECONDARY"
              btnText="Create"
              customClass="btn-left"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
