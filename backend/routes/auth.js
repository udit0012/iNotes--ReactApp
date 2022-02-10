const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const {body,validationResult}=require("express-validator");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");
const jwt_key = "indiaismycountry"

router.post('/register',[
    body('username','username must contain atleast 3 characters').isLength({min:3}),
    body('email','enter a valid email').isEmail(),
    body('password','password must contain atleast 6 characters').isLength({min:6})
], async(req,res)=>{
    try {
        let success = false
        const err = validationResult(req)
        if(!err.isEmpty()){
            return res.status(400).json({success, error:err.array()})
        }
        let user = await User.findOne({email:req.body.email})
        if(user){
            return res.status(400).json({success, error:"User already exists"})
        }
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password,salt)
        user = await User.create({
            username:req.body.username,
            email:req.body.email,
            password:secPass,
        });
        const data = {
            user :{
                id : user.id
            }
        }
        const authtoken = jwt.sign(data,jwt_key)
        success = true
        res.json({success,authtoken})
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({error:"Internal server error"})
    }
})

router.post('/login',[
    body('email','Enter a valid email').isEmail(),
],async (req,res)=>{
    try {
        let success = false;
        const err = validationResult(req)
        if(!err.isEmpty()){
            return res.status(400).json({success,error:err.array()})
        }
        let user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({success,error:"Invalid credentials"})
        }
        const passcomp = await bcrypt.compare(req.body.password,user.password)
        if(!passcomp){
            return res.status(400).json({success,error:"Invalid credentials"})
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authtoken = jwt.sign(data,jwt_key)
        success = true
        res.json({success,authtoken})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})

router.get('/getuser',fetchuser,async(req,res)=>{
    try {
        userid = req.user.id
        const user = await User.findById(userid).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})

module.exports = router