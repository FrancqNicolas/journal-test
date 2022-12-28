const mongoose = require("mongoose")
const NotesSchema = mongoose.Schema({
    title: String,
    publishedDate: String,
    content: String
})

module.exports = mongoose.model('note', NotesSchema)