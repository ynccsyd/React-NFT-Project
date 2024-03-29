import React from 'react'
import CardNft from '../CardNft/Card'
import "./cont.css"

const ContainerNfts = ({nfts}) => {

  return (
    
    <div className='nft-container' >
        {nfts.map((nft, index)=>{
            return <CardNft nft={nft} key={index} />
        })};
    </div>
  )
}

export default ContainerNfts

