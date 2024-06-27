const jwt = require("jsonwebtoken")

const JWT_SECRET = process.env.JWT_SECRET

const verify_token = function(req,res,next){
    const authHeader = req.headers.authorization

    if(authHeader){
        const token = authHeader
       jwt.verify(token,"JWT_SECRET",function(err,PAYLOAD){
        if (err) {
            return res.status(403).json({message:"Token is not valid"})
            
        } else {
            req.user_data=PAYLOAD
            next()
        }
       }) 
    }else{
        res.status(401).json({message:"You are not authenticated"})
    }
}
module.exports=verify_token  