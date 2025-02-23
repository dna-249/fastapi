import React from 'react'
import Order from './order'

const Item = ({data}) => {
  return (
    <div>Item
        <div ><img src={data.image} className='img' alt='' /></div>
        Item Info
        <div>{data.name}</div>
        <Order  data ={data}/>
    </div>
  )
}

export default Item