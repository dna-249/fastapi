import React, { lazy } from 'react'
const Order = lazy(()=>import('./order'))
import { useState } from 'react'

const Item = ({data}) => {
  const [show, setShow]= useState(true)
  return (
    <div>{show?(<div className='homegrid'>
        <div ><img loading='lazy' src={data.image}  width={150} height={150} alt='' /></div>
        <div>Item Info
        <div>Name:{data.name}</div> 
        <div>Category:{data.category}</div>
        <div>Price:{data.price}</div>
        <div>Contact{data.contact}</div>
        <div>Whatsapp{data.whatsapp}</div>
        <div onClick={()=>setShow(false)}>ORDER NOW</div></div>
        </div>):(
       <div><Order  data ={data}/></div>)} 
    </div>
  )
}

export default Item