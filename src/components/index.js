import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react"
import { BsFillMoonStarsFill } from "react-icons/bs";


const MyNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
       <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Andrew</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Explore
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className=" cursor-pointer text-2xl"
          />
        </Link>
      </div>
    </div>

    </div>
   
  );
};

export default MyNavbar;
