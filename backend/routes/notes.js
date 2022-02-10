const router = require('express').Router()
const {body,validationResult} = require("express-validator")
const fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');

//fetching all notes
router.get('/fetchallnotes',fetchuser,async(req,res)=>{
    try {
        const notes = await Notes.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})

//adding a new note
router.post('/addnote',fetchuser,[
    body('title','Title must contain atleast 3 characters').isLength({min:3}),
    body('description','description is too short').isLength({min:6})
],async(req,res)=>{
    try {
        const {title,description,tag} = req.body
        let success = false
        const err = validationResult(req)
        if(!err.isEmpty()){
            return res.status(400).json({success,error:err.array()})
        }
        const note = await new Notes({
            user : req.user.id,
            title,description,tag
        })
        const savednote = await note.save()
        res.json(savednote)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})

//updating a existing note
router.put('/updatenote/:id',fetchuser,async(req,res)=>{
    try {
        const {title,description,tag} = req.body
        const newnote = {}
        if(title){newnote.title=title}
        if(description){newnote.description=description}
        if(tag){newnote.tag=tag}

        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).json({error:"Not found"})
        }
        if(note.user.toString()!== req.user.id){
            return res.status(401).json({error:"Access Denied"})
        }
        note = await Notes.findByIdAndUpdate(req.params.id,{$set: newnote},{new:true});
        res.json(note)
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})

//deleting a existing note
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    try {

        let note = await Notes.findById(req.params.id)
        if(!note){
            return res.status(404).json({error:"Not found"})
        }
        if(note.user.toString()!== req.user.id){
            return res.status(401).json({error:"Access Denied"})
        }
        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({"Success":"Note Successfully deleted"})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({error:"Internal server error"})
    }
})
module.exports = router