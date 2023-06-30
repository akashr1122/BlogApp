import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../component/Login'
import Signup from '../component/Signup'
import Home from '../component/Home'

const RoutePage = () => {
  return (
   <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
     
    </Routes>
  )
}

export default RoutePage