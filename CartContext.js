

import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(cartItem => cartItem.id === item.id);
      if (itemExists) return prevItems;
      return [...prevItems, item];
    });
  };

  const removeCartItem = (id) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  
  const value = {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
    calculateTotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;

