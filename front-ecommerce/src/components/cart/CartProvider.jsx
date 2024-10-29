import { useState } from 'react';
import { CartContext } from './CartContext';
import PropTypes from 'prop-types';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

//
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };