import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/BottomNav.css'

function BottomNav() {
  return (
    <div className='maindiv3'>
       <Link to="/men-clothing" className="link">MEN</Link>
       <Link to="/women-clothing" className="link">WOMEN</Link>
       <div>MOBILE COVERS</div>
       <div>LIVE NOW</div>
       <div>AMERICAN PIMA</div>
       <div>BEWAKOOF AIR</div>
       <div>OFFICIAL MERCH</div>
       <div>PLUS SIZE</div>
    </div>
  )
}

export default BottomNav