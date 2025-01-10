import React from "react";
import MainCarousel from "../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../components/HomeSectionCarousel/HomeSectionCarousel";
import { product } from '../../data/sampledata.js';


const HomePage = () => {
    return (
        <div>
          <MainCarousel/>


          <div className='space-y py-20 flex flex-col justify center px-5 lg:px-10'> 
               <HomeSectionCarousel data={product} sectionName={"demo"}/>
          </div>

          
        </div>
       
    )
}

export default HomePage;