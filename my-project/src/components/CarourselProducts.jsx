import React, { useState } from "react";
import pub_1 from '../assets/images/pub-1.jpg';
import pub_2 from '../assets/images/pub-2.webp';
import banner from '../assets/images/banner.png';

const CarouselProducts = () => {
  // State contenant les données des images
  const [slides] = useState([
    {
      id: 1,
      src: pub_1,
      alt: "Slide 1",
      cover: false,
    },
    {
      id: 2,
      src: pub_2,
      alt: "Slide 2",
      cover: false,
    },
    {
      id: 3,
      src: banner,
      alt: "Slide 3",
      cover: true,
    },
  ]);

  return (
    <>
      <div className="carousel w-full h-[200px] md:h-[50vh] lg:h-[60vh] mx-auto">
        {slides.map((slide) => (
          <div key={slide.id} id={`item${slide.id}`} className="carousel-item w-full">
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full ${!slide.cover ? 'md:object-cover' : ''}`} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {slides.map((slide) => (
          <a key={slide.id} href={`#item${slide.id}`} className="btn btn-xs">
            {slide.id}
          </a>
        ))}
      </div>
    </>
  );
};

export default CarouselProducts;
