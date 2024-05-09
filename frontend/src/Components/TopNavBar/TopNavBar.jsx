import React, { useState, useEffect } from 'react';
import './TopNavBar.css';


const TopNavbar = () => {
    const [goldPrice, setGoldPrice] = useState(null);

    const fetchGoldPrice = async () => {
        try {
            const API_KEY = '9b8ff5ef05d884874aaf759f542878bf';
            const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=LKR&currencies=LKR`);
            const data = await response.json();
            console.log(data);
            
            // Check if 'LKR' exists in the response before accessing it
            if (data.rates && data.rates.LKR) {
                const goldPrice = data.rates.LKR;
                setGoldPrice(goldPrice);
            } else {
                console.error('Gold price data is not available or in unexpected format: ', data);
            }
        } catch (error) {
            console.error('Error fetching gold price: ', error);
        }    
    };
    

    useEffect(() => {
        fetchGoldPrice();
        const interval = setInterval(fetchGoldPrice, 300000); // Fetch every 5 minutes
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='top-navbar'>
            <div className="gold-price">
                <p>Gold Price: {goldPrice ? `LKR ${goldPrice}` : 'Loading...'}</p>
            </div>
            {/* Add additional options as needed */}
            {/* Example: */}
            <div className="additional-options">
                <p>Option 1</p>
                <p>Option 2</p>
            </div>
        </div>
    );
};

export default TopNavbar;
