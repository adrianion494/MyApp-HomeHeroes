import React from 'react';
import './ProductTile.css';

function ProductTile(props) {
  return (
    <div className="product-tile">
      <img src={props.img} alt="" />
      <h3>{props.name}</h3>
      <div class="product-tile-price">
        {props.price}
      </div>
      <div>
        <button className='btn-prod'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductTile;
