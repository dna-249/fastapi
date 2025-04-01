import React from 'react'

const Order=({data})=>{
  return (
    <>
    <div className='auto'>
    <div><img loading='lazy' src={data.image} width={200} height={250} alt=''/></div>
    Item Info
        <div>Name:{data.name}</div> 
        <div>Category:{data.category}</div>
        <div>Price:{data.price}</div>
        <div>Contact{data.contact}</div>
        <div>Whatsapp{data.whatsapp}</div>
    </div>
    </> 
  )
}

export default Order        