import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Registration from '../pages/Registration'
import Tour from '../pages/Tour'
import Profile from '../pages/Profile'
import About from '../pages/About'

function Routers() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='tour/:id' element={<Tour/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default Routers