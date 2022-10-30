import React from "react";
import { ethers } from "ethers";
import { useState } from "react";
import MyNavbar from "../Navbar/index";
import "./connect.css";
// import { Link } from "react-scroll";

const ConnectNft = () => {
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
    // https://api.opensea.io/api/v1/assets
    // https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb
    fetch("https://api.opensea.io/api/v1/assets", options)
      .then((response) => response.json())
      .then((response) => {
        setData(response.assets);
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <MyNavbar />
      <div className="secondP">
        <p>{account}</p>
        <button className="button n-button" onClick={connect}>
          Connect
        </button>
        {data.map((nft) => {
          return (
            <div key={nft.index}>
              <img src={nft.image_url} alt={"nft.im"} />
              <p>{nft.name}</p>
              <p>{nft.id}</p>
              <p>{nft.asset_contract.opensea_seller_fee_basis_points}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConnectNft;
