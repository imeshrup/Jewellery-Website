import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Items/Item';
import button from '../Assets/dropdown_icon.png';
import button2 from '../Assets/dropdown_icon.png';

const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/popularinrings')
      .then((response) => response.json())
      .then((data) => setPopularProducts(data));
  }, []);

  useEffect(() => {
    let scrollContainer = document.querySelector('.popular-item');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');

    const handleWheel = (evt) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
      scrollContainer.style.scrollBehavior = 'auto';
    };

    const handleNextClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft -= 900;
      }
    };

    const handlePrevClick = () => {
      scrollContainer.style.scrollBehavior = 'smooth';
      if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 900;
      }    };

    
    scrollContainer.addEventListener('wheel', handleWheel);
    next.addEventListener('click', handleNextClick);
    prev.addEventListener('click', handlePrevClick);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      next.removeEventListener('click', handleNextClick);
      prev.removeEventListener('click', handlePrevClick);
    };
  }, []);

  return (
    <div className='popular'>
      <h1>Popular in Rings</h1>
      <hr />
      <div className='scroll'>
        <img src={button} alt="" id='next'/>
        <div className="popular-item">
          {popularProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
        <img src={button2} alt="" id='prev'/>
      </div>
    </div>
  );
};

export default Popular;
