import React, { useEffect, useState } from 'react'
import './App.css'
import Home from "./components/home"
import axios from "axios"
import Header from './components/header'
import Search from './components/search'
import Update from './components/update'
import {Route,Routes} from "react-router-dom"

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
    </Routes>
    </>
  )
}

export default App