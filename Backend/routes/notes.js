const express = require("express")
const router = express.Router()
const notes = require("../models/Notes")
const fetchuser = require("../middleware/login")
const userModel = require("../models/User")
const { body, validationResult } = require('express-validator');
const { findById, findByIdAndUpdate } = require("../models/Notes")



router.get("/getnote", fetchuser, async (req, res) => {
    try {
        
        const Note = await notes.find({ user: req.user.id })
        res.json(Note)
    } catch (error) {
console.log(error)
    }
})
router.get("/createnote", fetchuser, [
    body('tag', 'Minimum 3 Length').isLength({ min: 3 }),
    body('desc', 'Minimum 5 length').isLength({ min: 5 })
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { title, desc, tag } = req.body
    const CNotes = new notes({
        title, desc, tag, user : req.user.id
    })

    const saveNote = await CNotes.save()
    res.json(saveNote)
})




router.put("/updatenote/:id", fetchuser, async (req,res)=>{
    const {title, desc, tag} = req.body;
    const newNote = {}

    if(title){ newNote.title = title}
    if(desc){ newNote.desc = desc}
    if(tag){ newNote.tag = tag}

    let FNote = await notes.findById(req.params.id)
    if(!FNote) return res.send("note note found")

try {
    // check For USer 
     if(FNote.user.toString() !== req.user.id) return res.status(401).send("not allowed")
FNote = await notes.findByIdAndUpdate(req.params.id, {$set : newNote}, {new : true})
res.send(FNote)
} catch (error) {
    console.log(error)
}
   


})
router.delete("/deletenote/:id", fetchuser, async (req,res)=>{

    let FNote = await notes.findById(req.params.id)
    if(!FNote) return res.send("note not found")

try {
    // check For USer 
     if(FNote.user.toString() !== req.user.id) return res.status(401).send("not allowed")
FNote = await notes.findByIdAndDelete(req.params.id)
res.send({"success" : "deleted", FNote})
} catch (error) {
    console.log(error)
}
   


})
module.exports = router