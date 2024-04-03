import React, { useState, useEffect } from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

const Hero = () => {
  const images = [
    "https://sathiesjewellery.com/admin/ajax/images/PD0003546_65e6c2b6c7f4a.jpg",
    "https://sathiesjewellery.com/admin/ajax/images/PD0003545_65e6c25d5bc52.jpg",
    "https://sathiesjewellery.com/admin/ajax/images/PD0003544_65e6c1d2692f4.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState(images.length - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrivals</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={`
              ${index === currentImageIndex ? 'active' : ''}
              ${index === previousImageIndex ? 'previous' : ''}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
