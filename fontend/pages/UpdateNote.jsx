import React, { useEffect, useState } from 'react'
import "../src/index.css"
import axios from "axios"
import { Navigate, useNavigate, useParams } from 'react-router-dom'
const initalState={
    title:"",
    note:"",
    category:""
   
}
export const UpdateNote = () => {
    const [data,setData]=useState(initalState)
    const {id}=useParams()
  const navigate=useNavigate()
    const handelChange=(e)=>{
 const {name,value}=e.target
       setData({...data,[name]:value})
       
    }
    const handelSubmit=()=>{
   axios.patch(`https://mushy-galoshes-ant.cyclic.app/note/update/${id}`,data,{
    headers:{
        Authorization:localStorage.getItem("token")
    }
   })
   .then((res)=>{
    console.log(res)
     alert(res.data)
    navigate("/note")
    setData(initalState)

   }).catch((err)=>{
    
    console.log("failed to write note")
   })
     
    }
useEffect(()=>{
axios.get(`https://mushy-galoshes-ant.cyclic.app/${id}`,{
    headers:{
        Authorization:localStorage.getItem("token")
    }
   })
.then((res)=>{
setData(res.data)

console.log(res.data)
}).catch((err)=>{
    console.log(err)
})
},[])
  return (
    <div className='register'>
        <h1>Create A Note</h1>
        <input type="text" placeholder="Write Your Title" value={data.title} name="title" onChange={handelChange}/>
        <input type="text" placeholder="Write Note" value={data.note} name="note" onChange={handelChange}/>
        <input type="text" placeholder="Write Category" value={data.category} name="category" onChange={handelChange}/>
        <button onClick={handelSubmit}>Update Note</button>
    </div>
  )
}
