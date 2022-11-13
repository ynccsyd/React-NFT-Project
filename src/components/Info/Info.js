import React from "react";
import "./info.css";
// import Button from "../Button/index";
import infoimage from "../images/nft2.png";

const Info = () => {
  return (
    <div className="info">
      <div className="info-part1">
        <img src={infoimage} alt="" />
      </div>
      <div className="info-part2">
        <span>More than art... </span>
        <span>Collectible items, Music and media, Gaming,Sports Moments</span>
        <span> OpenSea:</span>
        <span> The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).</span>
        <span>The best alternatives to OpenSea Marketplace :</span>
        
        <span>
          
          <div>
            <img
              src="https://ph-files.imgix.net/78415788-0c59-4b2b-965e-e0a4c6cfec4b.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1"
              alt="Opensea"
            />
            <p>Opensea</p>
          </div>
          <div>
            <img
              src="https://ph-files.imgix.net/13a47380-01fa-4e50-9ffb-3894832246c0.gif?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1"
              alt="NFTPort"
            />
            <p>NFTPort</p>
          </div>{" "}
          <div>
            <img
              src="https://ph-files.imgix.net/29de7468-98ec-4511-a03c-54ea79ee1407.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1"
              alt="CryptoKitties"
            />
            <p>CryptoKitties</p>
          </div>{" "}
          <div>
            <img
              src="https://ph-files.imgix.net/4c09789c-7906-4f52-b4b3-a704e93ef57f.gif?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=64&h=64&fit=crop&dpr=1"
              alt="Mars Genesis"
            />
            <p>Mars Genesis</p>
          </div>
          {/* - OpenSea : The world's first and largest digital marketplace for crypto
          collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
          exclusive digital items. */}
        </span>
       
      </div>
      <div className="info-part3">
        <div className="info-right-bg">

        </div>
        <div className="info-right-diamond">
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gcs/files/f496b19adc577d659f4990e190764e0f.gif?auto=format&w=128"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/LS2AweBD09u_9ZJKCg0kygkkUwUEm48vdgFNYm7SoT-GvQ9iysUUCbSz5ILDKd3SfLFstKOOmKjeWdE7_SZwVhCSggHiLLwytEGN?auto=format&w=128"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gae/P1WOzkGqp_mU_1jvpFhQnevYKryg0BZbzmuiawx-Xm-5NtuvhWXXPQu5P0llghCzAinhL6iOS8M0wmBLS_naA4d1jsyBTYyXP47br6U?auto=format&w=1920"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          <div className="info-right-diamond-item absolute-center ">
            <img
              src="https://i.seadn.io/gcs/files/761fafa5d0d0c4cf4d209daa0e5fcf9f.gif?auto=format&w=128"
              alt="diamond1"
              className="info-right-diamond-item-img"
            />
          </div>
          
  
        </div>
      </div>
    </div>
  );
};

export default Info;
