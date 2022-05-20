
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import data from './data/data.json'
import Offers from './components/Offers';
import Heading from './components/Heading'
import StarProduct from './components/StarProduct'
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReviews from './components/ProductReviews.js'
import Videos from './components/Videos.js'
import Banner from './components/Banners.js'
import Footer from './components/Footer.js'
import NavOptions from './components/NavOptions.js'

function App() {
  return (
    <div>
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
    <Slider start={data.banner.start}/>
    <Offers offer={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotAccessoriesMenu/> 
    <Router>
      <Routes>
        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}/>
         <Route exact path="/smartDevice"  element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}/> 
         <Route exact path="/home"  element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}/> 
         <Route exact path="/lifestyle"  element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}/> 
         <Route exact path="/mobileAccessories"  element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.smartDevice}/>}/> 
      </Routes>
    </Router>
    <Heading text="PRODUCT REVIEWS"/>
    <ProductReviews productReviews={data.productReviews}/>
    <Heading text="VIDEO"/>
    <Videos videos={data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner end={data.banner.end}/>
    <Footer footer={data.footer}/>
    </div>
  );
}

export default App;
