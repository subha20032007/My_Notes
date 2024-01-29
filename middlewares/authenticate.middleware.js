const jwt=require("jsonwebtoken")

const authenticate=(req,res,next)=>{
    const token=req.headers.authorization
    if(token){
        const decode=jwt.verify(token,"happy")
        if(decode){
            next()
        }else{
            res.send("Login First")
        }
    }else{
        res.send("Login first")
    }
}
module.exports={
    authenticate
}
//12345a