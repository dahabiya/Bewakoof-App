import React from 'react'
import { Link } from 'react-router-dom'
import { PiBagLight } from "react-icons/pi";
import {TfiSearch } from "react-icons/tfi";

import '../Styles/MidNav.css'

function WishListNav() {
  return (
    <div className='maindiv2'>
        <Link to="/" className="left-elements">
        <img className='bewakoof-logo' src='/images/bewakoof.jpg'/>
        </Link>
        <Link to="/men-clothing" className="left-elements padng link">MEN</Link>
        <Link to="/women-clothing"className="left-elements padng link">WOMEN</Link>
        <Link to="/accessories" className="left-elements padng link">ACCESSORIES</Link>

        <div className='line'></div>
        
        <div className="right-elements padng ">
            <Link to="/cart"className='link'> <PiBagLight size="1.5em"/></Link>
        </div>
        <div className=" padng">
        </div>
   
    </div>
  )
}

export default WishListNav