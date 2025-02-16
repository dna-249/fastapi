import {useState, React} from 'react'
import Item from './item'


const Home = ({data})=>{
    const [show,setShow] = useState(true)
    const [select,setSelect] = useState(true)
  return (
    <div >
        
        {show? (
          <div className='home'>
            
            {data
            .map((item,index)=> <div key={index} onClick={()=>setShow(()=>false)}>

           <div> <img className='img2' src={item.image}alt=""  onClick={()=>setSelect(item.image)} /></div>
            </div>)}
          </div>
        ):(<div className='auto'><Item data={select}  /></div> )}
    </div>
  )
}


export default Home