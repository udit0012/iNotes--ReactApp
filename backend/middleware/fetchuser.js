const jwt = require("jsonwebtoken")
const jwt_key = process.env.JWT_SECRET;

const fetchuser = (req,res,next)=>{
    const token = req.header('auth-token')
    if(!token){
        return res.status(400).json({error:"Access Denied"})
    }
    try {
        const data = jwt.verify(token,jwt_key)
        req.user = data.user
        next();
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }

}

module.exports = fetchuser