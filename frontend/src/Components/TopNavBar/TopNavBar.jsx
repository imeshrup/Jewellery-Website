import React, { useState, useEffect } from 'react';
import './TopNavBar.css';

const TopNavbar = () => {
    const [goldPrice, setGoldPrice] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGoldPrice = async () => {
            try {
                const API_KEY = 'c88c6f3ba015a9c4aa50ab78be76a1d0';
                const response = await fetch(`https://api.metalpriceapi.com/v1/latest?api_key=${API_KEY}&base=XAU&currencies=LKR`);
                if (!response.ok) {
                    throw new Error('Failed to fetch gold price');
                }
                const data = await response.json();

                // Check if 'LKR' exists in the response before accessing it
                if (data.rates && data.rates.LKR) {
                    const goldRateInOunces = data.rates.LKR;
                    // Convert ounces to grams
                    const goldRateInGrams = goldRateInOunces *0.035274;
                    // Calculate the price for 22-karat gold (approximately 91.67% pure)
                    const goldRateFor22Karat = goldRateInGrams * (22 / 24) *0.9167 *8;
                    setGoldPrice(goldRateFor22Karat);
                    setLoading(false); // Set loading to false after fetching data
                } else {
                    console.error('Gold price data is not available or in unexpected format: ', data);
                    setLoading(false); // Set loading to false even if fetching fails
                }
            } catch (error) {
                console.error('Error fetching gold price: ', error);
                setLoading(false); // Set loading to false if an error occurs
            }
        };

        fetchGoldPrice(); // Initial fetch

        const interval = setInterval(fetchGoldPrice, 300000); // Fetch every 5 minutes

        // Clean up function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='top-navbar'>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="gold-price">
                    <p>Gold Price (22K): {goldPrice ? `LKR ${goldPrice.toFixed(2)}` : 'Data not available'}</p>
                </div>
            )}
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
