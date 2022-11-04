import React from "react";
import { useState } from "react";
import Logo from "../images/crypto-camera.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MetamaskIcon from "../images/metamask.png";

const MyNavbar = () => {
  const [address, setAddress] = useState(null);
  const ConnectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      // console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
    }
  };

  return (
    <>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">NFTMarket</div>

          <a href="/" className="lg:col-span-1 col-span-2">
            <img src={Logo} alt="Logo" className="w-32" />
          </a>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/whatisnft">
                  What is NFT
                </Link>
              </li>
              <li>
                <Link className="link" to="/explore">
                  Explore
                </Link>
              </li>
              <li>
                <Link className="link" to="/buynft">
                  Buy NFT
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/buynft" >
            <div className="div-m">
              <img
                className="image"
                src={MetamaskIcon}
                alt="metaicon"
                onClick={ConnectWallet}
              />
              <div class="overlay-m">
                <div className="text-icon">
                  Connect <br /> Metamask
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
