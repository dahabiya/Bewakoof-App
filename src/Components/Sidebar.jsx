import React from 'react'
import '../Styles/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      Sort by:
      <br/> 
      <select>
           <option className='Option'>Price Low to High</option>
           <option className='Option'>Price High to Low</option>
      </select>
    </div>
  )
}

export default Sidebar