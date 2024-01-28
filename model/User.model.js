
const mongoose=require("mongoose")

const UserSchema= mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    pass:String
})
const Usermodel=new mongoose.model("user",UserSchema)
//123
module.exports=({
    Usermodel
})