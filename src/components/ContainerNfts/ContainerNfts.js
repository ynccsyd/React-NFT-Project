import React from 'react'
import CartNft from '../CartNft/Cart'

const ContainerNfts = ({nfts}) => {
  return (
    <div>
        {nfts.map((nft, index)=>{
            return <CartNft nft={nft} key={index} />
        })};
    </div>
  )
}

export default ContainerNfts