import React from 'react';
import { useWishlist } from '../Context/WishListContext';
import { useCart } from '../Context/CartContext'

import '../Styles/Item.css'
import TopNav from '../Components/TopNav'
import WishListNav from './WishListNav';

const WishList = () => {
  const { wishlist, removeFromWishlist} = useWishlist();
  const {addToCart} =useCart();

  return (
    <div>
       <TopNav />
      <WishListNav />

       {wishlist.length === 0? 

        <div>
          <h2 className='heading'>Wishlisted Items</h2>
          <h3 className="empty">Wishlist Is Empty...</h3>
        </div>

       :

       <div>
        <ul className='wishList-items'>
       {wishlist.map((item) => (
          <li key={item.id} className='wishList-item'>
          <img className="item-image"src={item.image} />
           <div className='item-title'> {item.title}</div>
          <div><button className='cart-btn pd'  onClick={() => addToCart(item)}>Add To Cart</button>
           <button className='cart-btn' onClick={() => removeFromWishlist(item.id)}>Remove</button>
           </div>
         </li>
       ))}
     </ul>
       </div>

      }       
    </div>
  );
};

export default WishList;

