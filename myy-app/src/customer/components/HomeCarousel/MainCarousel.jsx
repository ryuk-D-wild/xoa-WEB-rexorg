import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
  const items = MainCarouselData.map((item, index) => (
    <img
      key={index}
      className="cursor-pointer object-cover w-full h-full"
      role="presentation"
      src={item.image}
      alt={`Slide ${index + 1}`}
    />
  ));

  return (
    <div className="relative">
      <AliceCarousel
        items={items}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
        responsive={{
          0: { items: 1 },
          600: { items: 1 },
          1024: { items: 1 },
          1440: { items: 1 },
        }}
      />
    </div>
  );
};


export default MainCarousel;
