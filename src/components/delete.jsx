import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

const Delete =() => {
    const [search,setSearch] = useState('')
    const [show,setShow] = useState(true)
    const [select,setSelect] = useState(true)
    const [data,setData] = useState([''])
    const [isUpload,setIsUpload] = useState(true)
    const [uploading,setUploading] = useState(false)
    



    const handleRequest = () => {
      axios.get(`https://server-api-1d7r.vercel.app/api/users`)
           .then((res) => {alert(res.data);setData(res.data)})
           .catch(err => console.log(err))
  }
  
  useEffect(()=>{
    handleRequest()
  },[])

  const handleDelete = (params) => {

    setIsUpload(false)
    axios.delete(`https://server-api-1d7r.vercel.app/api/users/${select._id}` )
            .then((res) => {setUploading(true);alert(select._id + "has been deleted successfully");console.log(res.data)})
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
               <div onClick={()=>setSelect(item)}> {item._id}</div>
            <img src={item.image}alt="" width={300} onClick={()=>setSelect(item)} />
            </div>)}
          </div>
        ):(<div>{isUpload?(<div className="auto" >
                <div><img src={select.image} /></div>
                <div>{select.id}</div>
                <div>{select.name}</div>
                <div>{select.price}</div>
                <div>{select.category}</div>
                <div>
                 <button onClick={()=>handleDelete()}>Delete Id</button>
                </div></div>
              ):(<div>{uploading?(
                <div className='auto success'>
                  <div className='green'>you have successfully updated</div>
                  <div style={{height:"100px",width:"100px", borderRadius:"5px",backgroundColor: "rgba(113, 103, 103, 0.28)"}}>
                    <img src={select.image} height={200}  width={100} alt='' /></div> 
                    <div>Go to ...</div>
                     <div className='span'> 
                  <div className='button'><Link to="/">HOME</Link></div>
                  </div>
                </div>):(
                 <div className='auto upload'> 
                       <div className='auto'><h4>Please wait while Updating... </h4>
                        <img className='animation' src={"/loading.png"} width={50} height={50}/>
                      </div>
                </div>)}
                </div>

              )}

        </div> )}
    </div>
  )
}

export default Delete