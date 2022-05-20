import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import '../styles/ProductReviews.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className="ProductReviews">
        {
           productReviews.map((item,index)=>(
           <ProductReviewsCard key={item.image}  index={index} image={item.image} name={item.name} review={item.review} price={item.price}/>
           ))
        }
    </div>
  )
}

export default ProductReviews