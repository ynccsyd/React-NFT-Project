import { useEffect, useState } from 'react'
import React from 'react'
// import ContainerNfts from "../../components/ContainerNfts/ContainerNfts"
import MyNavbar from '../../components/Navbar'
import "./buy.css";
import ResponsiveDrawer from "../../components/Sorting/ResponsiveDrawer"



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
      <ResponsiveDrawer/>
      {/* <ContainerNfts nfts={nfts} /> */}
    
  
    </div>
  )
}

export default BuyNft

