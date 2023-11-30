import React from 'react'
import '../Styles/Item.css'
import { PiHeart } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useWishlist} from '../Context/WishListContext'
import { useCart } from '../Context/CartContext';

function Item({item}) {

  const { addToWishlist, fav} = useWishlist();
  const {addToCart} =useCart();
 

    // const { title, price, category, image,} = item;

  return (
    <div className='item'>
        <img className=" item-image"src={item.image} />

        <div className='item-description'>
        {item.title}
        <button className="btn-fav" onClick={() => addToWishlist(item)}> 
        {fav ? <PiHeart style={{ color: 'red' }} size="1.5em" /> : <PiHeart   size="1.5em" />}
        </button>
        </div>
       
        <div> ₹  {item.price}</div>  

        <div>
        <button className='cart-btn' onClick={() => addToCart(item)}>Add To Cart</button> 
        </div>

    </div>
  )
}

export default Item