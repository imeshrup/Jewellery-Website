import React from 'react';
import './DescriptionBox.css';


const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
       <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
       </div>
       <div className="descriptionbox-description">
        <p>
            An E-commerce website is a platform that facilitates buying and selling
            of products or servides over the internet serves as a virtual
            marketplace where business and individuals show their products,
            interact with customers, and conduct transactions without the need for a 
            physical preferance.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis porro 
            exercitationem aliquid? Aperiam mollitia amet culpa tempora repellendus minima 
            quo nam rem cum quia! Officia omnis ratione ad obcaecati consequatur.
        </p>
       </div>
    </div>
  )
}

export default DescriptionBox
