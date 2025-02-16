import React from 'react'
import Items from './items'

const Item = ({data}) => {
  return (
    <div>Item
        <div ><img src={data} className='img' alt='' /></div>
        Item Info
        <div>{data}</div>
        <Items  data ={data}/>
    </div>
  )
}

export default Item