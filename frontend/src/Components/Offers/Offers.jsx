import React, { useState, useEffect } from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png';

const Offers = () => {
  const images = [
    "https://sathiesjewellery.com/admin/ajax/images/PD0003771_6603c84994206.jpg",
    "https://sathiesjewellery.com/admin/ajax/images/PD0002263_64ec46e778d3e.jpg",
    "https://sathiesjewellery.com/admin/ajax/images/PD0003691_65f40791687d6.jpg",
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
    <div className='offers'>
      <div className="offers-left">
        <h1>EXCLUSIVE</h1>
        <h1>Offers for you</h1>
        <p>ONLY BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Offer ${index}`}
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

export default Offers;
