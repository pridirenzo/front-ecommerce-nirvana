import { useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import PropTypes from 'prop-types';

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const updatedCart = [...prevItems, product];
      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Guardar en localStorage
      return updatedCart;
    });
  };

  const clearCart = () => { //para vaciar el carrito al cerrar sesion 
    setCartItems([]); 
    localStorage.removeItem('cartItems'); 
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};