import React from 'react'
import {Link} from "react-router-dom"
import "../src/index.css"
export const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='noline' to="/">Home</Link>
        <Link className='noline' to="/register">Register</Link>
        <Link className='noline' to="/login">Login</Link>
        <Link className='noline' to="/createnote">Create Note</Link>
        <Link className='noline' to="/note">Notes</Link>
    </div>
  )
}
