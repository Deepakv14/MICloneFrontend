import React from 'react'
import VideoCard from './VideoCard.js' 
import '../styles/Videos.css'
const Videos = ({videos}) => {
  return (
    <div className="Videos">
        {
            videos.map((item,index)=>(
                <VideoCard key={item.image} image={item.image} index={index} name={item.name}/>
            ))
        }
    </div>
  )
}

export default Videos