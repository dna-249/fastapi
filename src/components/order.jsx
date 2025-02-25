import React from 'react'

const Order=({data})=>{
  return (
    <>
    <div className='auto'>
    <div><img src={data.image} width={200} height={250} alt=''/></div>
    <div>name:{data.name}</div>
    <div>{data.price}</div>
    <div>{data.contact}</div>
    <div>{data.whatsapp}</div>
    </div>
    </> 
  )
}

export default Order        