import React from 'react'
import {Route} from "react-router-dom"
import { Routes } from 'react-router-dom'
import { Register } from './Register'
import { Login } from './Login'
import { Home } from './Home'
import { CreateNote } from './CreateNote'
import { Notes } from './Notes'
export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/createnote" element={<CreateNote/>}/>
        <Route path="/note" element={<Notes/>}/>
        
    </Routes>
  )
}
