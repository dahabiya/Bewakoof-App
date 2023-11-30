import React from 'react'
import { Link } from 'react-router-dom'
import { useDataContext } from '../Context/DataContext';
import { useState } from 'react';


import TopNav from '../Components/TopNav'
import MidNav from '../Components/MidNav'
import Item from '../Components/Item';
import '../Styles/Item.css'
import Sidebar from '../Components/Sidebar';

function Accessories() {

  const [sort, setSort] = useState(false);
  const [items, setItems] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const { data, loading } = useDataContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  const filteredItems = data.filter(item => item.category === "jewelery" ||  item.category === "electronics");
  
  const handleSortChange = (order) => {
    setSort(!sort)
    setSortOrder(order);
    const sortedItems = filteredItems.slice().sort((a, b) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        // No sorting order, return original order
        return 0;
      }
    });

    setItems(sortedItems);
  };

  return (
    <div>
      <TopNav />
      <MidNav />
      <Link to="/" className='link'>Home </Link>/ Accessories

      <div className="main-div">
          <div className='sidebar'>
           Sort by:
          <br/> 
          <div>
           <button className='Option' onClick={() => handleSortChange('asc')}>Price Low to High</button>
           <button className='Option' onClick={() => handleSortChange('desc')}>Price High to Low</button>
          </div>
          </div>
      
      {sort? 
      <div>
           Sorted Items..
           <div>
          <ul className='items'>
         {items.map((item) => (
         <li key={item.id}><Item item={item}/></li>
        ))}
        </ul>
        </div>  
      </div> 
      :
      <div>
      <ul className='items'>
         {filteredItems.map((item) => (
         <li key={item.id}><Item item={item}/></li>
        ))}
      </ul>
        </div>
      }

      </div>
      </div>
  )
}
export default Accessories