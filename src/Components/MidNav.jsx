import React from 'react'
import { Link } from 'react-router-dom'
import { PiHeart , PiBagLight } from "react-icons/pi";
import {TfiSearch } from "react-icons/tfi";

import '../Styles/MidNav.css'

function MidNav() {
  return (
    <div className='maindiv2'>
        <Link to="/" className="left-elements">
        <img className='bewakoof-logo' src='/images/bewakoof.jpg'/>
        </Link>
        <Link to="/men-clothing" className="left-elements padng link">MEN</Link>
        <Link to="/women-clothing"className="left-elements padng link">WOMEN</Link>
        <Link to="/accessories" className="left-elements padng link">ACCESSORIES</Link>

        <div className="right-elements">
            <span className='searchspan'>{< TfiSearch/>}</span>
            <input className="searchbox"type="text" placeholder="  Search by product, category or collection"/>
        </div>
        <div className='line'></div>
        <div className="right-elements padng">Login</div>
        <div className="right-elements padng "> 
            <Link to="/wishlist" className='link'><PiHeart  size="1.5em"/></Link> 
        </div>
        <div className="right-elements padng ">
            <Link to="/cart" className='link'> <PiBagLight size="1.5em"/></Link>
        </div>
        <div className="right-elements padng">
            <div className='link'>
            <img src='/images/flag.png' className='flag'/>
            </div>
        </div>
   
    </div>
  )
}

export default MidNav