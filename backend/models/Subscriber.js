const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({

    email:{
        type:String,
        required:[true,"Email cannot be Empty"],
        trim:true,
        unique:[true,"This Email is Already Exist"]
    }

},{timestamps:true})

module.exports = mongoose.model("Subscriber", subscriberSchema);