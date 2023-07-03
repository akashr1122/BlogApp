const mongoose = require("mongoose");


const PostSchema = new mongoose.Schema({

    title:String,
    summery:String,
     content:String,
      cover:String
},{
    timestamps:true,
})

const PostModel = mongoose.model('post',PostSchema) ;


 module.exports={PostModel};