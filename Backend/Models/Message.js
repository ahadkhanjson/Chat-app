const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
   sender:{ type:mongoose.Schema.Types.ObjectId , ref:"User" },
   content:{ type:String , trim: true },
   chat:{ type:mongoose.Schema.Types.ObjectId , ref:"Chat"}
},{
    timestamps:true
})


module.exports = mogoose.model("Message",Schema)