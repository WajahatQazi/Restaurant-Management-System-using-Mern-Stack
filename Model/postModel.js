const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    name:{ type:String,
    required:true,
        minlength:3,
        maxlength:100,
        unique:false,
        trim:true },
    email: { 
      type:String,
      required:true,
      minlength:3,
      maxlength:100,
      unique:true,
      trim:true },

      password: { 
        type:String,
        required:true,
        minlength:3,
        unique:true
         },
  
  },
  
  { collection: "user-data"}
  
);

const Post = mongoose.model("userData", schema);
module.exports = Post;