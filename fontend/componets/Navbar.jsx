import React from 'react'
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div style={{"display":"flex","justifyContent":'space-around'}}>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}
