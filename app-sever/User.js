const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
    Name:String,
    Password:String
})

const userModel =mongoose.model("user",userSchema)
module.exports=userModel