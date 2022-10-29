import React from "react";
import "./footer.css";
import nftFooter from "../images/nftfooter.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      
      <div className="f-content">
        {/* <span>Zainkeepscode@gmail.com</span> */}
        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <Gitub color="white" size={"3rem"} />
        </div>
      </div>
     
      <div className="img-footer">
        <img src={nftFooter} alt="" style={{ width: "100%" }} />
      </div>
      
    </div>
  );
};

export default Footer;