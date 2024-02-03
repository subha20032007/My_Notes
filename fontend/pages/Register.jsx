import React, { useState } from 'react'
import "../src/index.css"
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
        console.log(data)
      setData(initalState)
    }
  return (
    <div className='register'>
        <h1>Register Page</h1>
        <input type="text" value={data.name} name="name" onChange={handelChange}/>
        <input type="email" value={data.email} name="email" onChange={handelChange}/>
        <input type="age" value={data.age} name="age" onChange={handelChange}/>
        <input type="password" value={data.pass} name="pass" onChange={handelChange}/>
        <button onClick={handelSubmit}>Register</button>
    </div>
  )
}
