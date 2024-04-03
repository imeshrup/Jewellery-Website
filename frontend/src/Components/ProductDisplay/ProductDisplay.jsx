import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) => {

    const{product} = props;

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdispaly-right">
        <h1>{product.name}</h1>
        <div className="productdispaly-right-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdispaly-right-prices">
            <div className="productdispplat-right-price-old">${product.old_price}</div>
            <div className="productdispplat-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdispaly-right-description">
            A light weight, usually knitted, pullover shirt, close-fitting and a round neckline and short sleevs, worn asan undershirt or outergarment
        </div>
        <div className="productdisplay-right-size">
            <h1>Select size</h1>
            <div className="productdisplay-right-sizes">
                <div>Small</div>
                <div>Medium</div>
                <div>Large</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button>ADD TO CART</button>
        <p className='productdispaly-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
        <p className='productdispaly-right-category'><span>Tags :</span>Modern, T-Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay
