import { useEffect, useState } from 'react'
import axios from "axios"
import Home from './home'


function Axios() {
  const [data, setData]=useState([''])
  const [input, setInput] = useState('')
  const [input2, setInput2] = useState('') 

  
  const reader = (file) => {
    const readUrl = new FileReader()
     readUrl.readAsDataURL(file)
    readUrl.onloadend =()=>{
      setData(readUrl.result)
    }
  }
  
  
  
  

  return (
    <>
    
    <div >
    <h1>Get Request API</h1>
</div>
    <div className='home'>
      {data.map((data,index)=><div key={index}>
      <Home data={data.name} />
      </div> )}
      </div>
    <input type="text"  onChange={(e)=>setInput(e.target.value)}/>
    <input type="text" onChange={(e)=>setInput2(e.target.value)}/>
   
    <button  onClick={handleRequest}> get Request</button>
          
    </>
  )
}

export default Axios
