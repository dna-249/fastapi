import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='white auto'>
      
         <h2>What would you like to perform?</h2>
         <div><Link to={'/update'}>New Item</Link></div>
         <div><Link to={'/updateitem'}>Update Item</Link></div>
         <div> <Link to={'/delete'}>Delete Item</Link></div>
     
    </div>
  )
}

export default Menu