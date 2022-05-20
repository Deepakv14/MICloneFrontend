import React from 'react'
import '../styles/HotItemCard.css'
const HotItemCard = ({name,image,index,price}) => {
  return (
    <div className="HotItemCard">
     <img src={image} alt={`${index} Product`} />
     <p>{name}</p>
     <span>{price}</span>
    </div>
  )
}

export default HotItemCard