const mongoose = require("mongoose")
const mongoURI = "mongodb+srv://UditGoyal:Royalboy0012@cluster0.sy39d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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