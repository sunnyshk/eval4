const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    title:{type:String,required:true}
},
{
    userId:{type:mongoose.Schema.Types.ObjectId},
    ref:"user",
    required:true,
},
{
    versionKey:false,
    timestamps:true,
})



module.exports = mongoose.model('todo',todoSchema);