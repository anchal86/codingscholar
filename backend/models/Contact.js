const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
    name:
	{
		type: String,
		required: [true,"Name cannot be Empty"],
		trim: true
    },
    email:{
        type:String,
        required:[true, "Email cannot be Empty"],
        trim:true
    },
    phoneNo:{
        type:Number,
        required:[true, "Phone Number caanot be Empty"],
        trim:true
    },
    message:{
        type:String,
        required:[true, "Message cannot be Empty"],
        trim:true
    }
},{timestamps:true})

module.exports = mongoose.model("Contact", contactSchema);