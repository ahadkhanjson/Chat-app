const mongoose = require('mongoose');


const Schema = new mongoose.Schema({
  name:{type:String , required:true},
  email:{type:String , required:true},
  password:{type:String , required:true},
  pic:{type:String ,default:
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" }
},{
    timestamps:true
})


module.exports = mogoose.model("User",Schema)