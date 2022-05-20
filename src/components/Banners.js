import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const Banners = ({end}) => {
  return (
    <Carousel fade>
    {
       end.map((x,index)=>(
        <Carousel.Item id="banner" interval={1000} keyword={true}>
        <img
          className="d-block w-100"
          src={x.image} 
          alt={`${index} slide`}
        />
        <Carousel.Caption>
        <h3>{x.name}</h3>
        <p>{x.description}</p>
        <p>{x.source}</p>
        <u>Read More</u>
        </Carousel.Caption>
      </Carousel.Item> 
       )) 
    }       
</Carousel>
  )
}

export default Banners