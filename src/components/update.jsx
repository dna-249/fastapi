import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Update = () => {
    const [item1,setItem1] = useState()
    const [item3,setItem3] = useState()
    const [item4,setItem4] = useState()
    const [item2,setItem2] = useState()
    const [item5,setItem5] = useState()
    const [item6,setItem6] = useState()
    const [item7,setItem7] = useState()
    const [item,setItem] = useState()
    
      
    const reader = (file) => {
      const readUrl = new FileReader()
       readUrl.readAsDataURL(file)
      readUrl.onloadend =()=>{
        setItem(readUrl.result)
      }
    }
    const form = new FormData()
    form.append("file",item1)
  
  
  const handleRequest = () => {
    reader(item1)
    


    axios.post(`https://server-api-1d7r.vercel.app/api/users`,{image:`http://localhost:3000/file/${item1.name}`,
                                                  name:item2,
                                                  description:item3,
                                                  price:`$${item4}`,
                                                  category:item5,
                                                  contact:`${item6}`,
                                                  whatsapp:item7
                                               })
         .then((res) => {console.log(res.data)})
         .catch(err => console.log(err))
}
useEffect(() => {

}, [item])


    
  return (
    <div>
        <div className="input"> 
          <div style={{height:"200px",width:"200px",backgroundColor: "rgba(0,0,0,0.5)"}}><img src={item}  width={200} alt='' /></div> 
           <h5> upload Item </h5>
       Image: <input required type='file'  onChange={(e)=>setItem1(e.target.files[0])} /> <br/>
       Name: <input required type='text'    onChange={(e)=>setItem2(e.target.value)} /> <br/>
       Description:<br/> <textarea  onChange={(e)=>setItem3(e.target.value)} /> <br/>
       Price: <input required type='number' onChange={(e)=>setItem4(e.target.value)} /> <br/>
       Category: <input required type='text' onChange={(e)=>setItem5(e.target.value)} /> <br/>
       Contact: <input required type='number' onChange={(e)=>setItem6(e.target.value)} /> <br/>
       Whatsapp: <input required type='text' onChange={(e)=>setItem7(e.target.value)} />
       <div> <button  onClick={handleRequest}> UPLOAD </button> </div>
        </div>
    </div>
  )
}

export default Update