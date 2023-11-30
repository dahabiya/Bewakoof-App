import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { DataProvider } from './Context/DataContext'
import {WishlistProvider} from './Context/WishListContext'
import { CartProvider } from './Context/CartContext'

import Home from './Pages/Home'
import './App.css'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Accessories from './Pages/Accessories'
import WishList from './Components/WishList'
import AddtoCart from './Components/AddtoCart'
import CheckOut from './Components/CheckOut'

function App() {
  return (
   <BrowserRouter>
   <DataProvider>
    <WishlistProvider>
     <CartProvider>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/men-clothing" element={<Men/>} />
        <Route path="/women-clothing" element={<Women/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/wishlist" element={<WishList/>} />
        <Route path="/cart" element={<AddtoCart/>} />
        <Route path="/checkout" element={<CheckOut/>} />
      </Routes>
    </CartProvider> 
    </WishlistProvider>
   </DataProvider>
   </BrowserRouter>
  )
}

export default App