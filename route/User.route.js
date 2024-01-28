const express=require("express")
const UserRouter=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { Usermodel } = require("../model/User.model")

UserRouter.post ("/register",async(req,res)=>{
    const {name,age,email,pass}=req.body
try{
    bcrypt.hash(pass, 5,async (err, hash)=>{
        // Store hash in your password DB.
        if(err){
            res.send("err")
            console.log(err)
        }else{
         const user =new Usermodel({name,age,email,pass:hash})
         await user.save()
         res.send({name,age,email,pass:hash})
        }
    });
}catch(err){
console.log(err)
res.send("something went wrong")
}
})

UserRouter.post("/login",async(req,res)=>{
    const {email,pass}=req.body
    try{
     const user=await Usermodel.find({email})
     if(user.length>0){
        bcrypt.compare(pass, user[0].pass,(err, result)=>{
           if(result){
            const token=jwt.sign({app:"note"},"happy")
            res.send({msg:"logged in",token})
           }else{
res.send("wrong credential")
           }
        });
     }else{
        res.send("wrong credential")
     }
    }catch(err){
        console.log(err)
res.send("something went wrong")
    }
})
UserRouter.get("/",async(req,res)=>{
    const token=req.headers.authorization
    try{
   jwt.verify(token,"happy",async(err,decode)=>{
    if(err){
  console.log(err)
  res.send("invalid token")
    }else{
       const user=await Usermodel.find()
       res.send(user)
    }
   })
    }catch(err){
        res.send("err")
        console.log(err)
    }
})

module.exports={
    UserRouter
}