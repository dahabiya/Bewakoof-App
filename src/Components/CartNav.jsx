import React from 'react'
import { Link } from 'react-router-dom'


function CartNav() {
    return (
        <div className='maindiv2'>
            <Link to="/" className="left-elements">
            <img className='bewakoof-logo' src='/images/bewakoof.jpg'/>
            </Link>
            <Link to="/men-clothing" className="left-elements padng link">MEN</Link>
            <Link to="/women-clothing"className="left-elements padng link">WOMEN</Link>
            <Link to="/accessories" className="left-elements padng link">ACCESSORIES</Link>
    
            <div className='line'></div>
            
            <div className=" padng">
            </div>
       
        </div>
      )
    }

export default CartNav