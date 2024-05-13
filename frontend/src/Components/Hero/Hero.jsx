import React, { useState, useEffect } from 'react';
import './Hero.css';
import kids from '../Assets/banner_desktop.png';
import women from '../Assets/1.jpg';
import mens from '../Assets/2.jpg';

const Hero = () => {
    const images = [
        { src: kids, text: 'Kids Offer', buttonText: 'Shop Now' },
        { src: women, text: 'Women Offer', buttonText: 'Explore' },
        { src: mens, text: 'Men Offer', buttonText: 'View Collection' },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='slider'>
            {images.map((image, index) => (
                <div key={index} className={`slider-item ${index === currentImageIndex ? 'active' : ''}`}>
                    <img src={image.src} alt={`Offer ${index}`} />
                    <div className="text-container">
                        <h2>{image.text}</h2>
                        {/* <h2 className="banner-text">{image.text}</h2> */}
                        <button>{image.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Hero;
