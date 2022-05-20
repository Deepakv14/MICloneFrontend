import React from 'react';
//import {BrowserRouter as Router,Link} from 'react-router-dom';
import '../styles/HotAccessoriesMenu.css'

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      {/** 
     
       <Router>
      <Link to="/music" className="HotAccessoriesLink">Music Store</Link>
       <Link  to="/smartDevice" className="HotAccessoriesLink">Smart Devices</Link>
       <Link  to="/home" className="HotAccessoriesLink">Home</Link>
       <Link  to="/lifestyle" className="HotAccessoriesLink">Lifestyle</Link>
       <Link to="/mobileAccessories" className="HotAccessoriesLink">Mobile Accessories</Link>
    </Router>
      
      **/}
      <a className="HotAccessoriesLink" href="/music">Music Store</a>
      <a className="HotAccessoriesLink" href="/smartDevice">Smart Devices</a>
      <a className="HotAccessoriesLink" href="/home">Home</a>
      <a className="HotAccessoriesLink" href="/lifestyle">Lifestyle</a>
      <a className="HotAccessoriesLink" href="/mobileAccessories">Mobile Accessories</a>
    
    </div>
  )
}

export default HotAccessoriesMenu