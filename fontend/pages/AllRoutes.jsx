import React from 'react'
import {Route} from "react-router-dom"
import { Routes } from 'react-router-dom'
import { Register } from './Register'
import { Login } from './Login'
import { Home } from './Home'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

    </Routes>
  )
}
