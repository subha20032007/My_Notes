import React, { useState } from 'react'
import "../src/index.css"
import axios from "axios"
const initalState={
    email:"",
    pass:""
}
export const Login = () => {
    const [data,setData]=useState(initalState)
    const handelChange=(e)=>{
 const {name,value}=e.target
       setData({...data,[name]:value})
       
    }
    const handelSubmit=()=>{
   axios.post("https://shy-teal-llama-cuff.cyclic.app/user/login",data)
   .then((res)=>{
    console.log(res.data)
    localStorage.setItem("token",res.data)
    setData(initalState)
   }).catch((err)=>{
    
    console.log("failed to register")
   })
     
    }
  return (
    <div className='register'>
        <h1>Login Page</h1>
        <input type="email" placeholder="Enter Your Email" value={data.email} name="email" onChange={handelChange}/>
        <input type="password" placeholder="Enter Your Password" value={data.pass} name="pass" onChange={handelChange}/>
        <button onClick={handelSubmit}>Register</button>
    </div>
  )
}
