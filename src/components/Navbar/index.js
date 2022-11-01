import React from "react";

import "./Navbar.css";
import { Link } from "react-router-dom";

const MyNavbar = () => {

 

  return (
    <>
      <div className="n-wrapper" id="Navbar">
        {/* left */}
        <div className="n-left">
          <div className="n-name">NFTMarket</div>

          <a href="/" className="lg:col-span-1 col-span-2">
            <img src="logo.png" alt="Logo" className="w-32" />
          </a>
        </div>
        {/* right */}
        <div className="n-right">
          <div className="n-list">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <Link className="link" to="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/whatisnft" >
                  What is NFT
                </Link>
              </li>
              <li>
                <Link className="link" to="/explore">
                  Explore
                </Link>
              </li>
              <li>
                <Link className="link" to="/buynft" >
                  Buy NFT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Link to="/connect" >
            <button  className="button n-button">Connect</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MyNavbar;
