import React, { useState, useEffect } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  
  const handlePrice = () => {
    const total = cart.reduce((acc, item) => {
      return acc + (item.amount || 1) * item.price;
    }, 0);
    setPrice(total);
  };

  
  const handleRemove = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  
  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, +1)}> + </button>
            <button>{item.amount || 1}</button>
            <button onClick={() => handleChange(item, -1)}> - </button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Cart;
