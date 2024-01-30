const express=require("express")
const { UserRouter } = require("./route/User.route")
const { connection } = require("./config/db")
const { noteRouter } = require("./route/Notes.route")
const { authenticate } = require("./middlewares/authenticate.middleware")

const app=express()
const port=9090
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("home page")
})
app.use("/user",UserRouter)
app.use(authenticate)
app.use("/note",noteRouter)
//123

app.listen(port,async()=>{
try{
await connection
console.log("connected to db")
}catch(err){
    console.log(err)
    console.log("err from connecting")
}
    console.log(`app running on port ${port}`)
})
//------------------------------------------------------------------------------------------------------
// const express=require("express")
// const { connection } = require("./config/db")
// const { Usermodel } = require("./model/User.model")
// const jwt=require("jsonwebtoken")
// const app=express()
// const bcrypt=require("bcrypt")
// const port=9090
// app.use(express.json())
// app.get("/",(req,res)=>{
//     res.send("<h1>Home Page</h1>")
// })

// app.get("/user",async(req,res)=>{
    
//     try{
//        const user=await Usermodel.find()
//        console.log(user)
//        res.send(user)
//     }catch{
//         console.log(err)
//         res.send("404 not found")
//     }
// })
// app.post("/register",async(req,res)=>{

//     const {name,age,email,pass}=req.body
//     try{
//         bcrypt.hash(pass,5, async(err, hash)=> {
//             // Store hash in your password DB.
//             if(err){
               
//             }else{
//                 const user=new Usermodel({name,age,email,pass:hash})
//                 await user.save()
//             }
          
//         });
      
//        //console.log(user)
//        res.send("Register successful")
//     }catch(err){
//         console.log(err)
//         res.send("404 not found")
//     }
// })
// app.post("/login",async(req,res)=>{
//     const {email,pass}=req.body
//     try{
//         const user=await Usermodel.find({email})
//     //    res.send(user)
//         if(user.length>0){
//         bcrypt.compare(pass,user[0].pass, (err, result)=> {
//             // result == true
//             if(result){
//                 const token=jwt.sign({app:"note"},"happy")
//                 res.send({"login":"Success",token})
//             }else{
//                 res.send("Wrong Credential")
//                 console.log(err)
//             }
//         });
//      }else{
//             res.send("register first")
//           }
  
//     }catch(err){
//         console.log(err)
//         res.send("404 not found")
//     }
// })
// app.get("/data",(req,res)=>{
//     const token=req.headers.authorization
//    jwt.verify(token,"happy",(err,decode)=>{
    
//     if(err){
//       res.send("invalid Token")
//       console.log(err)
//     }else{
//       res.send("Data.....")
//     }
//    })
// })
// app.listen(port,async()=>{
//     try{
//       await connection
//       console.log("connected to db")
//     }catch(err){
//         console.log(err)
//     }
//     console.log(`app runing on port ${port}`)
// })