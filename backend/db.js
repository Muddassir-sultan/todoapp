const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://admin:muddassir786@cluster0.sxuegzo.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}