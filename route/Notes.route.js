const { Notemodel } = require("../model/Note.model")
const express=require("express")
const noteRouter=express.Router()
noteRouter.get("/",async(req,res)=>{
  
    try{
     const notes=await Notemodel.find()
     res.send(notes)
    }catch(err){
 console.log(err)
 res.send({"err":"something went wrong"})
    }
})
noteRouter.post("/add",async(req,res)=>{
  const payload=req.body
    try{
     const notes=new Notemodel(payload)
     await notes.save()
     res.send("noted..")
    }catch(err){
 console.log(err)
 res.send({"err":"something went wrong"})
    }
})
noteRouter.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id
  
    const payload=req.body

    try{
        await Notemodel.findByIdAndUpdate({_id:ID},payload)
    
     res.send("edited.....")
     console.log(`This ${ID} Has been edited${payload.title}`)
    }catch(err){
 console.log(err)
 res.send({"err":"something went wrong"})
    }
})
noteRouter.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
    try{
  await Notemodel.findByIdAndDelete({_id:ID})
     res.send("deleted.....")
     console.log(`This ${ID} Has been deleted`)
    }catch(err){
 console.log(err)
 res.send({"err":"something went wrong"})
    }
})

module.exports={noteRouter}