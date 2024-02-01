const express=require("express")
const { connection } = require("./config/db")
const { UserRouter } = require("./Router/User.Router")
const { NoteRouter } = require("./Router/Note.Router")
const app=express()
const port=9090
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/user",UserRouter)
app.use("/note",NoteRouter)
app.listen(9090,async()=>{
    try{
        await connection
        console.log("connected to db")
     }catch(err){
         console.log(err)
   
     }
    console.log("app is connected ",port)
})
//1234