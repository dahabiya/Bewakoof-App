// CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context
const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (!isProductInCart){
        setCart((prevCart) => [...prevCart, product]);
        setTotal(total+product.price)
    }
    else{
        alert("Item Added to Cart Already");
    }
   
  };

  const removeFromCart = (productId,productprice) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setTotal(total-productprice)
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,total }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for using the cart context
export const useCart = () => {
  return useContext(CartContext);
};
