import React from "react";
import Ethereum from "../images/ethereum.png"
import "./card.css";
import { useState } from "react";

const CardNft = ({ nft }) => {
  return (
    <div className="nft-card ">
      <div className="inner-wrapper">
        <div className="content">
          <img
            src={nft?.meta?.content[0]?.url}
            alt={nft?.meta?.name}
            className="imgnft"
          />
          <div className="nft-info">
            <div className="nft-info-l">
              <div className="nft-info-name">{nft?.meta?.name}</div>
              <p className="price-tag">
                {nft?.lastSale?.price}
                ETH
                <img src={Ethereum} alt="eth logo" className="ethereum-logo" />
              </p>
            </div>
            <div className="date">
              <p>Minted Date:{nft?.mintedAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNft;
