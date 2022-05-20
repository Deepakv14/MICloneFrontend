import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'

const HotAccessories = ({music, musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className="HotAccessories">
        <div>
        <img src={musicCover || smartDeviceCover ||homeCover ||lifestyleCover ||mobileAccessoriesCover} alt="Cover" />
    </div>
    <div>
    {
          music &&  music.map((item,index)=>(
                <HotItemCard key={item.image} image={item.image} index={index} name={item.name} price={item.price}/>
            ))
        }
         {
          smartDevice && smartDevice.map((item,index)=>(
                <HotItemCard key={item.image} image={item.image} index={index} name={item.name} price={item.price}/>
            ))
        }
        
        {
          home && home.map((item,index)=>(
                <HotItemCard key={item.image} image={item.image} index={index} name={item.name} price={item.price}/>
            ))
        }
          
          {
          lifestyle && lifestyle.map((item,index)=>(
                <HotItemCard key={item.image} image={item.image} index={index} name={item.name} price={item.price}/>
            ))
        }
         {
          mobileAccessories && mobileAccessories.map((item,index)=>(
                <HotItemCard key={item.image} image={item.image} index={index} name={item.name} price={item.price}/>
            ))
        }
  
    </div>
    </div>
  )
}

export default HotAccessories