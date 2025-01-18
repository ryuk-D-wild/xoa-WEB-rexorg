import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const HomeSectionCarousel = ({data, sectionName}) => {
    const [activeIndex,setActiveIndex]=useState(0);
    const responsive = {
      0: { items: 1 },
      720: { items: 2 },
      1024: { items: 4.5 },
      2048: { items: 6 },
    };
    
    const items = data.slice(0, 10).map((sproduct, index) => (
      <div key={index} className="transform transition-transform duration-500 ease-in-out hover:scale-105">
        <HomeSectionCard sproduct={sproduct} />
      </div>
    ));
    
    const totalItems =items.length;
    const slidePre=()=> { if (activeIndex < 0 ){setActiveIndex(activeIndex-1);}};
    const slideNext=()=> {if (activeIndex < totalItems -1){setActiveIndex(activeIndex+1);}};
    const syncActiveIndex = ({ item }) => setActiveIndex(item);
    
      return (
       <div className="border-hidden">
        <h2 className="text-2x1 front-extra-bold text-grey-800 py-5">{sectionName}</h2>
         <div className="relative p-5">
          <AliceCarousel
            items={items}

            disableDotsControls
            responsive={responsive}
            mouseTracking
            touchTracking
            animationDuration={800}
            animationType="fadeout"
            onSlideChange={syncActiveIndex}
            activeIndex={activeIndex}
          />
          {activeIndex < totalItems - 1 && (<Button variant="contained" className="z-50"sx={{ position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)', color: 'white', bgcolor: 'gray', '&:hover': { bgcolor: 'darkgray' },}} aria-label="next" onClick={slideNext}>
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(180deg)' }} />
          </Button> )}
          {activeIndex > 0 && ( <Button variant="contained" className="z-50"sx={{ position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)', color: 'white', bgcolor: 'gray', '&:hover': { bgcolor: 'darkgray' },}} aria-label="previous" onClick={slidePre}>
            <KeyboardArrowLeftIcon />
          </Button> )}
        </div>
      </div>
    );
  };

export default HomeSectionCarousel;