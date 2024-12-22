import React, { useState } from "react";
import pub_1 from '../assets/images/pub-1.jpg'
import pub_2 from '../assets/images/pub-2.webp'
import banner from '../assets/images/banner.png'

const CarouselProducts = () => {
  // State contenant les données des images
  const [slides] = useState([
    {
      id: 1,
      src: pub_1 ,
      alt: "Slide 1",
      cover:false,
    },
    {
      id: 2,
      src: pub_2,
      alt: "Slide 2",
      cover:false,
    },
    {
      id: 3,
      src: banner,
      alt: "Slide 3",
      cover:true,
    },
   
  ]);

  return (
    <div className="carousel w-full h-[200px] md:h-[50vh] lg:h-[60vh] mx-auto">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          id={`slide${slide.id}`}
          className="carousel-item relative w-full"
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className={`w-full ${!slide.cover?'md:object-cover':null} `} 
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#slide${index === 0 ? slides.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${(index + 1) % slides.length + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarouselProducts;
