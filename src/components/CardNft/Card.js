import React from 'react'



const CardNft = ({nft }) => {
  return (
    <div className=' card nft-card' >
      <p className="yazi">{nft.id}</p>
      <p className="yazi">{nft?.meta?.name}</p>
         
      <img src={nft?.meta?.content[0]?.url} alt="nfts" className="imgnft" width={nft?.meta?.content[0]?.width} height={nft?.meta?.content[0]?.height}/>
      
    </div>
  )
}

export default CardNft