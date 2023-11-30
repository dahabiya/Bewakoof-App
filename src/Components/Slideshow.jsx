import React from 'react'
import { useState } from 'react';
import '../Styles/Slideshow.css'

function Slideshow() {

    const images = [
    'images/home1.png',
    'images/home2.png',
    'images/home3.png'
    // 'images/home4.png',
    // 'images/home5.png'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  // Display only three images
  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="slideshow">
      {displayedImages.map((image, index) => (
        <img key={index} src={image} alt={`Slide ${currentIndex + index + 1}`} />
      ))}
      {/* <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext }>Next</button>
      </div> */}
      
    </div>
  );
};

export default Slideshow;