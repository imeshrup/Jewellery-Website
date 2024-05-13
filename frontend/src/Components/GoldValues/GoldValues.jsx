/*import React, { useState, useEffect } from 'react';
import './GoldValues.css';

const GoldValues = () => {
  const [goldPrice, setGoldPrice] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        // Fetch gold price data from an API
        const response = await fetch('API_ENDPOINT');
        if (!response.ok) {
          throw new Error('Failed to fetch gold price');
        }
        const data = await response.json();
        // Assuming the API response contains a key for gold price, adjust accordingly
        setGoldPrice(data.goldPrice);
      } catch (error) {
        console.error('Error fetching gold price:', error);
      }
    };
    

    // Call the fetch function
    fetchGoldPrice();

    // Set up a timer to fetch gold price periodically (e.g., every 5 minutes)
    const intervalId = setInterval(fetchGoldPrice, 5 * 60 * 1000); // 5 minutes

    // Clean up function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="gold-values">
      <h2>Gold Values</h2>
      {goldPrice !== null ? (
        <p>Current Gold Price: ${goldPrice}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default GoldValues;

*/
