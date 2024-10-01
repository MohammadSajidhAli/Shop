import React from 'react';
import '../styles/cards.css';

const Cards = ({ item, handleClick }) => {
  const { title, price, image, compare_at_price } = item;
  return (
    <div className="cards">
      <h1>{title}</h1>
      <div className="image_box">
        <img src={image} alt="Image" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>₹{price}</p>
        <p className='rupee'>₹{compare_at_price}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
  );
};
// vercel//
export default Cards;
