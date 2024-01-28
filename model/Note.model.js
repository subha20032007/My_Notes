const mongoose=require("mongoose")

const NoteSchema=mongoose.Schema({
    title:String,
    note:String,
    category:String,
    author:String
})
const Notemodel=mongoose.model("note",NoteSchema)

module.exports={
    Notemodel
}