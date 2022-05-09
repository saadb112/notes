const mongoose = require("mongoose")
// CREATE SHCEMA 
const notesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
})
// CREATE AND EXOPRT MODEL 
const notesModel = mongoose.model("Notes", notesSchema)

module.exports = notesModel