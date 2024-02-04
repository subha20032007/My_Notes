import React from 'react'
import "../src/index.css"
export const NoteTable = ({id,title,note,category,handelDelete}) => {
  return (
    <div className='notes' key={id}>
     <p>{title}</p>
     <p>{note}</p>
     <p>{category}</p>
     <div className='notebtn'>
     <button>EDIT</button>
     <button onClick={()=>{handelDelete(id)}}>Delete</button></div>
    </div>
  )
}
