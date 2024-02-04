import React, { useState } from 'react'
import "../src/index.css"
import axios from "axios"
const initalState={
    name:"",
    email:"",
    age:"",
    pass:""
}
export const Register = () => {
    const [data,setData]=useState(initalState)
    const handelChange=(e)=>{
 const {name,value}=e.target
       setData({...data,[name]:value})
       
    }
    const handelSubmit=()=>{
   axios.post("http://localhost:9090/user/register",data)
   .then((res)=>{
    console.log(res)
     alert("registed")
    setData(initalState)
   }).catch((err)=>{
    
    console.log("failed to register")
   })
     
    }
  return (
    <div className='register'>
        <h1>Register Page</h1>
        <input type="text" placeholder="Enter Your Name" value={data.name} name="name" onChange={handelChange}/>
        <input type="email" placeholder="Enter Your Email" value={data.email} name="email" onChange={handelChange}/>
        <input type="number" placeholder="Enter Your Age" value={data.age} name="age" onChange={handelChange}/>
        <input type="password" placeholder="Enter Your Password" value={data.pass} name="pass" onChange={handelChange}/>
        <button onClick={handelSubmit}>Register</button>
    </div>
  )
}
