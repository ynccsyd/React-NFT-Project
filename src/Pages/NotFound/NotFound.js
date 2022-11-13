import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";
import NotFound from "../../components/images/nft-free-depositphotos-bgremover.png";

const Notfound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <p
          style={{
            backgroundColor: "white",
            borderRadius: "3rem",
            width: "8rem",
            color:"purple",
            margin:"auto",
            marginTop:"1rem"
            
          }}
        >
          {" "}
          Go to Home
        </p>
      </Link>

      <p style={{ color: "white", marginTop:"1rem" }}>Page not found :( !</p>
      <div className="notimage">
        <img src={NotFound} alt="notfoundimage"/>
      </div>
    </div>
  );
};

export default Notfound;
