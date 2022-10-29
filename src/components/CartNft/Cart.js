import React from 'react'



const CartNft = ({nft }) => {
  return (
    <div >
      {/* <img src={nft.meta.content[0].url} alt={nft.image} /> */}
      
      <p>{nft.meta.name }</p>
      
    </div>
  )
}

export default CartNft