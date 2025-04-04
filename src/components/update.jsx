import React, { useState } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

const Update = () => {
    const [item1,setItem1] = useState()
    const [item3,setItem3] = useState()
    const [item4,setItem4] = useState()
    const [item2,setItem2] = useState()
    const [item5,setItem5] = useState()
    const [item6,setItem6] = useState()
    const [item7,setItem7] = useState()
    const [item,setItem] =   useState()
    const [image,setImage] = useState()
    const [isUpload,setIsUpload] = useState(true)
    const [isError,setIsError] = useState(true)
    const [uploading,setUploading] = useState(false)

    
    const form = new FormData()
    form.append("file",item1)
  const name = (e) => {
    setItem1(e.target.files[0])
    
    setImage(URL.createObjectURL(e.target.files[0]))
    console.log(image)
  }
  
  
  const handleRequest = () => {
   
    setIsUpload(false);

    axios.post("https://uploadapi-production.up.railway.app/post",form)
    .then((res)=> {setUploading(true);alert("successfully uploaded 01")}).catch((err)=>{setIsError(false);console.log(err)})

    axios.post("https://server-api-1d7r.vercel.app/api/users",
     {image:`https://uploadapi-production.up.railway.app/file/${item1.name}`,
                                                  name:item2,
                                                  description:item3,
                                                  price:`$${item4}`,
                                                  category:item5,
                                                  contact:`${item6}`,
                                                  whatsapp:item7
                                               })
         .then((res) => {alert("successfully uploaded 02")})
         .catch(err => {setIsError(false);console.log(err)})
         
        
        
}

 
    
  return (
    <div>{isUpload? (
        <div className="input"> 
          <div style={{height:"200px",width:"200px",backgroundColor: "rgba(188, 175, 175, 0.5)"}}>
             <img src={image} height={200} width={200} alt='' loading="lazy" />
             </div> 
           <h5 onChange={(e)=>name(e)}> upload Item </h5>
       Image: <input required type='file'  onChange={(e)=>name(e)} /> <br/>
       Name: <input required type='text'    onChange={(e)=>setItem2(e.target.value)} /> <br/>
       Description:<br/> <textarea  onChange={(e)=>setItem3(e.target.value)} /> <br/>
       Price: <input required type='number' onChange={(e)=>setItem4(e.target.value)} /> <br/>
       Category: <input required type='text' onChange={(e)=>setItem5(e.target.value)} /> <br/>
       Contact: <input required type='number' onChange={(e)=>setItem6(e.target.value)} /> <br/>
       Whatsapp: <input required type='text' onChange={(e)=>setItem7(e.target.value)} />
       <div><button  onClick={handleRequest}> UPLOAD </button></div>
        </div>
        ):( 
        
        <div>{uploading?(
        <div className='auto success'>
          <div className='green'>you have successfully updated</div>
          <div style={{height:"100px",width:"100px", borderRadius:"5px",backgroundColor: "rgba(113, 103, 103, 0.28)"}}>
            <img src={image} height={200}  width={100} alt='' loading='lazy' /></div> 
            <div>Go to ...</div>
             <div className='span'> 
          <div className='button'><Link to="/">HOME</Link></div>
          </div>
        </div>):isError?(
                         <div className='auto upload'> 
                               <div className='auto'><h4>Please wait while Updating... </h4>
                                <img className='animation' src={"/loading.png"} width={50} height={50} loading='lazy'/>
                              </div>
                        </div>):(
                        
                            <div className='auto success'>
                          <div className='green'>Network out of coverage not uploaded</div>
                          <div style={{height:"100px",width:"100px", borderRadius:"5px",backgroundColor: "rgba(113, 103, 103, 0.28)"}}>
                            <img src={image} height={200}  width={100} alt='' loading='lazy' /></div> 
                            <div>Go to ...</div>
                             <div className='span'> 
                          <div className='button'><Link to="/">HOME</Link></div>
                          </div>
                        </div>)}
        </div>
        )}
    </div>
  )
}

export default Update