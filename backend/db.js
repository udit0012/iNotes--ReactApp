const mongoose = require("mongoose")
require("dotenv").config()
const mongoURI = process.env.MONGO_URI

const mongoConnect = async()=>{
    try {
        mongoose.connect(mongoURI,()=>{
            console.log("Connected to mongoose successfully");
        })
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = mongoConnect