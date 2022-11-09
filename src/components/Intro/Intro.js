import React from "react";
import Button from "../Button/index";
import "./Intro.css";
import introNft from "../images/introNft.png";

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
          <span>NFT</span>
          <span> World</span>
          <span>
            Nft (Non-fungible token): A cryptographic asset on a blockchain with
            unique identification codes and metadata that distinguish them from
            each other.
          </span>
          <span >
            <Button btnType="PRIMARY" btnText="EXPLORE" />
            <Button btnType="SECONDARY" btnText="Create" customClass="btn-left" />
          </span>
        </div>
      </div>
     
    </div>
  );
};

export default Intro;
