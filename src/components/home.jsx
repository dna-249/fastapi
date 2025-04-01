import {useState, React, lazy} from 'react'
const Item =lazy(()=>import('./item'))


const Home = ({data})=>{
    const [show,setShow] = useState(true)
    const [select,setSelect] = useState(true)
  return (
    <div >
        
        {show? (
          <div className='home'>
            
            {data
            .map((item,index)=> <div key={index} onClick={()=>setShow(()=>false)}>

           <div onClick={()=>setSelect(item)} > <img className='img2' src={item.image} loading='lazy' alt=""  /></div>
            </div>)}
          </div>
        ):(<div className='auto'><Item data={select}  /></div> )}
    </div>
  )
}


export default Home