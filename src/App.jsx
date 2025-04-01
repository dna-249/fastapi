import React, { lazy, useEffect, useState } from 'react'
import './App.css'
const Home =lazy(()=>import("./components/home"))
const axios =lazy(()=>import("axios"))
const Head =lazy(()=>import('./components/header'))
const Sear =lazy(()=>import('./components/search'))
const Update =lazy(()=>import('./components/update'))
const {Route,Routes} =lazy(()=>import("react-router-dom"))
const Menu =lazy(()=>import('./components/menu'))
const Delete =lazy(()=>import('./components/delete'))
const UpdateItem =lazy(()=>import('./components/updateitem'))

const App = () => {
  const [data,setData] = useState([''])
  const handleRequest = () => {
    axios.get(`https://server-api-1d7r.vercel.app/api/users`)
         .then((res) => {console.log(res.data);setData(res.data)})
         .catch(err => console.log(err))
}

useEffect(()=>{
  handleRequest()
},[])
  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={<Home data={data}/>} />
    <Route path='/search' element={<Search data={data} />} />
    <Route path='/update' element={<Update />} />
    <Route path='/updateitem' element={<UpdateItem />} />
    <Route path='/menu' element={<Menu />} />
    <Route path='/delete' element={<Delete />} />

    </Routes>
    </>
  )
}

export default App