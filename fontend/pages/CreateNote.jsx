import React, { useState } from 'react'
import "../src/index.css"
import axios from "axios"
const initalState={
    title:"natu note",
    note:"natu eat mango",
    category:"note"
   
}
export const CreateNote = () => {
    const [data,setData]=useState(initalState)
    console.log(data)
    const handelChange=(e)=>{
 const {name,value}=e.target
       setData({...data,[name]:value})
       
    }
    const handelSubmit=()=>{
   axios.post("https://shy-teal-llama-cuff.cyclic.app/note/create",data,{
    headers:{
        Authorization:localStorage.getItem("token")
    }
   })
   .then((res)=>{
    console.log(res)
     alert("note created")
    setData(initalState)
   }).catch((err)=>{
    
    console.log("failed to write note")
   })
     
    }
  return (
    <div className='register'>
        <h1>Create A Note</h1>
        <input type="text" placeholder="Write Your Title" value={data.title} name="title" onChange={handelChange}/>
        <input type="text" placeholder="Write Note" value={data.note} name="note" onChange={handelChange}/>
        <input type="text" placeholder="Write Category" value={data.category} name="category" onChange={handelChange}/>
        <button onClick={handelSubmit}>Create Note</button>
    </div>
  )
}
