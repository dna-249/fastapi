import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Delete =() => {
    const [search,setSearch] = useState('')
    const [show,setShow] = useState(true)
    const [select,setSelect] = useState(true)
    const [data,setData] = useState([''])
    const handleRequest = () => {
      axios.get(`https://server-api-1d7r.vercel.app/api/users`)
           .then((res) => {console.log(res.data);setData(res.data)})
           .catch(err => console.log(err))
  }
  
  useEffect(()=>{
    handleRequest()
  },[])

  const handleDelete = (params) => {
    axios.post(`https://server-api-1d7r.vercel.app/api/users/${select.id}` )
            .then((res) => {console.log(res.data)})
            .catch(err => console.log(err))
    
  }
  

  return (
    <div>
        
        {show? (
          <div>
           <img src="/search.png" alt =""/>
           <input type='text' onChange={(e)=>setSearch(e.target.value)} />

            {data
            .filter((item) => {return search.toLowerCase() === ""? item:item.name.toLowerCase().includes(search)})
            .map((item,index)=> <div key={index} onClick={()=>setShow(()=>false)}>
                {item.name}
            <img src={item.image}alt="" width={300} onClick={()=>setSelect(item)} />
            </div>)}
          </div>
        ):(<div className="auto" >
                <div><img src={select.image} /></div>
                <div>{select.id}</div>
                <div>{select.name}</div>
                <div>{select.price}</div>
                <div>{select.category}</div>
                <div>
                 <button onClick={()=>handleDelete()}>Delete Id</button>
                </div>

        </div> )}
    </div>
  )
}

export default Delete