
const mongoose = require("mongoose")

const Connection =mongoose.connect("mongodb+srv://akash:akash@cluster0.itcozdu.mongodb.net/blogapp?retryWrites=true&w=majority")

module.exports={Connection}

   