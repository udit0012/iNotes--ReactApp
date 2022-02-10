const mongoose = require("mongoose")
const {Schema} = mongoose

const NoteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref :"User"
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"todo"
    }
},{
    timestamps:true
})

const Notes = mongoose.model("Notes",NoteSchema);
module.exports = Notes;