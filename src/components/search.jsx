import React, { lazy, useState } from 'react'
const Item = lazy(()=>import('./item'))

const Search=({data})=> {
    const [search,setSearch] = useState('')
    const [show,setShow] = useState(true)
    const [select,setSelect] = useState(true)
  return (
    <div>
        
        {show? (
          <div >
           <img src="/search.png" alt =""/>
           <input type='text' onChange={(e)=>setSearch(e.target.value)} />

           {data
            .filter((item) => {return search.toLowerCase() === ""? item:item.name.toLowerCase().includes(search)})
            .map((item,index)=> <div  key={index} onClick={()=>setShow(()=>false)}>
                {item._id}
                <div onClick={()=>setSelect(item)} >
            <img src={item.image} alt="" width={200} height={250} loading='lazy'  /></div>
            </div>)}
          </div>
        ):(<div className="auto" ><Item data={select}  /></div> )}
    </div>
  )
}

export default Search