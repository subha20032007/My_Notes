const express=require("express")
const { NoteModel } = require("../model/Notes.model")

const NoteRouter=express.Router()

NoteRouter.get("/",async(req,res)=>{
    try{
     const notes=await NoteModel.find()
     res.send(notes)
    }catch(err){
        console.log(err)
        res.send({"Err":"Notes"})
    }
})
NoteRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
        const notes=new NoteModel(payload)
        await notes.save()
     res.send("Notes has Been Saved ")
    }catch(err){
        console.log(err)
        res.send({"Err":"Notes"})
    }
})
NoteRouter.patch("/update/:id",async(req,res)=>{
    const payload=req.body
    const id=req.params.id
    const notes=await NoteModel.findOne({_id:id})
    console.log(notes)
    // const UserId_in_note=notes.UserId
    const UserId_makeing_req=req.body.UserId
  
    try{
        // if(UserId_makeing_req!==UserId_in_note){
        //     req.send("You are not authorized")
        // }else{
        //     await NoteModel.findByIdAndUpdate({_id:id},payload)
        //     res.send("User Has been Updated")
        // }
     
   
    }catch(err){
        console.log(err)
        res.send({"Err":"Notes"})
    }
})
NoteRouter.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try{
      await NoteModel.findByIdAndDelete({"_id":id})
     res.send("Notes Has been deleted")
    }catch(err){
        console.log(err)
        res.send({"Err":"Notes"})
    }
})

module.exports={
    NoteRouter
}