import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../component/Login'
import Signup from '../component/Signup'
import Home from '../component/Home'
import CreatePost from '../component/CreatePost'

const RoutePage = () => {
  return (
   <Routes>
      
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/createpost' element={<CreatePost/>}></Route>
    </Routes>
  )
}

export default RoutePage