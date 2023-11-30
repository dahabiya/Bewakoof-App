import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);


  const [fav, setFav] = useState(false);
  
  

  const addToWishlist = (product) => {
    const isProductInCart = wishlist.some((item) => item.id === product.id);

    if (!isProductInCart){
      
      setWishlist([...wishlist, product]);
      // setFav(true);
    }else{
      alert("item Already added to Wishlist");
    }
    
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist,fav }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  return useContext(WishlistContext);
};





