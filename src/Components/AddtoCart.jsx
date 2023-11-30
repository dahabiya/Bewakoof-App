import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import TopNav from '../Components/TopNav'
import CartNav from './CartNav';
import '../Styles/AddtoCart.css'
import { Link } from 'react-router-dom';

function AddtoCart() {

    const {cart,total,removeFromCart} = useCart();
  return (
    <div>
        <TopNav />
        <CartNav/>
        <h2 className='heading'>Your Cart</h2>
        <br></br>
        {   
            cart.length === 0?
            <div>
                <h3 className="empty">Cart Is Empty...</h3>
            </div>
            :
            <div>
                {
                    cart.map((item)=>(
                        <div key={item.id} className='grid-container'>
                            <span>
                            <img className="cart-image"src={item.image} />
                            </span>
                            <span >{item.title}</span>
                            <span>₹  {item.price}</span>
                            <span><button className='addtocart-btn' onClick={() => removeFromCart(item.id, item.price)}>Remove Item</button></span>
                           
                        </div>   
                    ))
                }

                <div className='total'>Total: ₹{total}
                <Link to="/checkout"><button className='chck-out-btn'>CheckOut</button></Link> 
                </div>

            </div>
            
        }   
    </div>
  )
}

export default AddtoCart