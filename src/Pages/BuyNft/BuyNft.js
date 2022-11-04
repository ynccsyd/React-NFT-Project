import { useEffect, useState } from 'react'
import React from 'react'
import ContainerNfts from "../../components/ContainerNfts/ContainerNfts"
import MyNavbar from '../../components/Navbar'
import "./buy.css";


const BuyNft = () => {
  const [nfts, setNfts]=useState([]);
  const[address, setAddress]=useState(null);

  // const ConnectWallet= async()=>{
  //   if (typeof window.ethereum !== 'undefined') {

  //     // console.log('MetaMask is installed!');
  //     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  //     setAddress(accounts[0])
      
  //   }

  // }

   const getNftData=async()=>{
      const response=await fetch(" https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb");
      const data= await response.json()
      setNfts(data.items);
      console.log(data)
   
     
   }

  useEffect(()=>{
    getNftData()
  },[address])

  return (
    <div>
      <MyNavbar/>
      {/* <div>
        <button className="n-button"  onClick={ConnectWallet}>
          Connect
        </button>
      </div> */}
      <ContainerNfts nfts={nfts} />
      {/* {nfts.map((nft, index) => {
          return (
            <div key={index}>
             <p className="yazi">{nft.id}</p>
             <p className="yazi">{nft.tokenId}</p>
         
             <img src={nft?.meta?.content[0]?.url} alt="nfts" className="imgnft" width={nft?.meta?.content[0]?.width} height={nft?.meta?.content[0]?.height}/>

            </div>
          );
        })} */}
  
    </div>
  )
}

export default BuyNft



// import React from "react";
// import { ethers } from "ethers";
// import { useState } from "react";
// import MyNavbar from "../../Navbar/index";
// import "./buy.css";

// const BuyNft = () => {
//   const [account, setAccount] = useState("");
//   const [data, setData] = useState([]);

//   const connect = async () => {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     let res = await provider.send("eth_requestAccounts", []);
//     // console.log(res);
//     setAccount(res[0]);
//     getNftData(res[0]);
//   };

//   const getNftData = () => {
//     const options = { method: "GET", headers: { accept: "application/json" } };
//     // https://api.opensea.io/api/v1/assets
//     // https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb
//     fetch("https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x4765273c477c2dc484da4f1984639e943adccfeb", options)
//       .then((response) => response.json())
//       .then((response) => {
//         setData(response.items);
//         console.log(response);
//       })
//       .catch((err) => console.error(err));
//   };
//   return (
//     <div>
//       <MyNavbar />
//       <div className="secondP">
//         <p>{account}</p>
//         <button className="n-button" onClick={connect}>
//           Connect
//         </button>
//         {data.map((item) => {
//           return (
//             <div key={item.id}>
              
//               <p className="yazi">{item.id}</p>
//               <p className="yazi">{item.lastSale.price}</p>
//               <p className="yazi">{item.tokenId}</p>
              
          
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default BuyNft;
