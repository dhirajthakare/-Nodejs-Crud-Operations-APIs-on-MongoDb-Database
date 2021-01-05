
const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    Name:String,
    Email:String,
    Mob:String,

})
module.exports =mongoose.model('contactsforms',userSchema);
