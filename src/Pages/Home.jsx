import React from 'react'

import TopNav from '../Components/TopNav'
import MidNav from '../Components/MidNav'
import BottomNav from '../Components/BottomNav'
import '../Styles/TopNav.css'
import Slideshow from '../Components/Slideshow'
import HomeImage from '../Components/HomeImage'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        <TopNav/>
        <MidNav />
        <BottomNav />
        <Slideshow />
        <HomeImage />
        <Footer />
    </div>
  )
}

export default Home