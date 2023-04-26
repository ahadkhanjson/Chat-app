const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
    chatName: { type:String , trim:true, required: true },
    isGroupChat: { type:Boolean , required: true},
    user: [{ type:mongoose.Schema.Types.ObjectId  , ref:"User"}],
    latestMessage: { type:mongoose.Schema.Types.ObjectId },
    groupAdmin:{type:mongoose.Schema.Types.ObjectId , ref:"User"}
},{
    timestamps:true
})


module.exports = mogoose.model("Message",Schema)