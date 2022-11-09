import React from "react";
import "./footer.css";
import Icons from "../images/man-showing.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Linkedln from "@iconscout/react-unicons/icons/uil-linkedin";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter
      text-light
      className="text-center text-lg-start text-muted text-light"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"></section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5 text-light">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="n-name">
                {/* <MDBIcon icon="gem" className="me-3" /> */}
                NFTMarket
              </h6>
              <img src={Icons} alt="icon" width={200}/>
             
              {/* <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p> */}
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Social Networks</h6>
              <a href="https://github.com/ynccsyd" className="text-reset">
                <Github color="white" size={"3rem"} />
              </a>
              <a href="linkedin.com/in/seydayoncaci" className="text-reset">
                <Linkedln color="white" size={"3rem"}  />
              </a>
              <a href="#!" className="text-reset">
                <Insta color="white" size={"3rem"}  />
              </a>
              
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Sign up for our newsletter
              </h6>
              <MDBInput
                contrast
                type="email"
                label="Email address"
                className="mb-4"
              />
              <MDBBtn outline color="light" type="submit" className="mb-4">
                Subscribe
              </MDBBtn>
               
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 text-light"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright:
        <a className="text-reset fw-bold" href="http://localhost:3000/">
          NFT Marketplace
        </a>
      </div>
    </MDBFooter>
  );
}


