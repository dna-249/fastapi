import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h3>myShop</h3>
        <div className='icons'>
        <div><Link to={'/'}>Home</Link> </div>
          <div><Link to={'/search'}>search</Link> </div>
          <div><Link to={'/update'}>update</Link> </div>
          <div>service</div>
        </div>
    </div>
  )
}

export default Header