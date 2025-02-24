import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h3>myShop</h3>
        <div className='icons'>
        <div><Link to={'/'}>Home</Link> </div>
          <div><Link to={'/search'}>Search</Link> </div>
          <div><Link to={'/menu'}>Update</Link> </div>
          <div><a href='/'>Refresh</a></div>
        </div>
    </div>
  )
}

export default Header