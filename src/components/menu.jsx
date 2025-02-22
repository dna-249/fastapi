import React from 'react'
import Update from './update'
import Delete from './delete'
import UpdateItem from './updateitem'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='auto'>
    <div><Link to={'/update'}>New Item</Link></div>
    <div><Link to={'/updateitem'}>Update Item</Link></div>
    <div> <Link to={'/delete'}>Delete Item</Link></div>
    </div>
  )
}

export default Menu