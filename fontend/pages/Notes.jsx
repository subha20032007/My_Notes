import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { NoteTable } from '../componets/NoteTable'
import "../src/index.css"
export const Notes = () => {
    const [note,setNote]=useState([])

    const getData=()=>{
        axios.get("http://localhost:9090/note",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res.data,"@@@")
            setNote(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handelDelete=(id)=>{
      axios.delete(`http://localhost:9090/note/delete/${id}`,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((res)=>{
       getData()
  alert(res.data)
        console.log(id,"this note deleted")
      }).catch((err)=>{
        console.log(err)
      })
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
       <h1>All Notes</h1>
       <div>
        {
            note?.map((el)=>(
                <NoteTable 
                key={el.id}
                id={el._id}
                title={el.note}
                note={el.note}
                      category={el.category} 
                      handelDelete={handelDelete}
                      />
            ))
        }
        
       </div>
    </div>
  )
}
