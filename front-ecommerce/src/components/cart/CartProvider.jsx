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
      const updatedCart = prevItems.map(item => 
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: item.quantity + product.quantity }
          : item
      );

      if (!updatedCart.find(item => item.id === product.id && item.size === product.size)) {
        updatedCart.push(product);
      }

      localStorage.setItem('cartItems', JSON.stringify(updatedCart)); 
      return updatedCart;
    });
  };

  const clearCart = () => { // Para vaciar el carrito al cerrar sesión
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
