import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
// import MyNavbar from "../Navbar";
import "./connect.css";
// import { Link } from "react-scroll";

const ContactNft = () => {
  const [account, setAccount] = useState("");
  const [data, setData] = useState([]);

  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    // console.log(res);
    setAccount(res[0]);
    getNftData(res[0]);
  };

  const getNftData = () => {
    const options = { method: "GET", headers: { accept: "application/json" } };

    fetch("https://api.opensea.io/api/v1/assets", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.assets);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="connect">
      
      <p>{account}</p>
      <button className="n-button" onClick={connect}>Connect</button>
      {data.map((nft) => {
        return (
          <div >
            <img  src={nft.image_url} />
            <p>{nft.name}</p>
            <p>{nft.id}</p>
            <p>{nft.asset_contract.opensea_seller_fee_basis_points}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactNft;
