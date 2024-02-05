import React from 'react'
import "../src/index.css"
import { Link } from 'react-router-dom'
export const NoteTable = ({id,title,note,category,handelDelete}) => {
  return (
    <div className='notes' key={id}>
     <p>{title}</p>
     <p>{note}</p>
     <p>{category}</p>
     <div className='notebtn'>
     <button><Link className='updatenoline' to={`/update/${id}`}>Edit</Link></button>
     <button onClick={()=>{handelDelete(id)}}>Delete</button>
   </div>
    </div>
  )
}
