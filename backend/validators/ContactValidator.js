const validator = require('validator');
const Contact = require('../models/Contact');

exports.contactValidator=async(req,res,next)=>{
    this.errors=[];
    if (validator.isEmpty(req.body.name)) {
		this.errors.push({name:"Name cannot be empty"});
	}else if(!/^[a-zA-Z ]+$/.test(req.body.name)){
        this.errors.push({name:"Name can only contains Alphabets"});
    }
    if (validator.isEmpty(req.body.email)) {
		this.errors.push({email:"Email cannot be empty"});
	}else{
		req.body.email = req.body.email.toLowerCase();
        if (!validator.isEmail(req.body.email)) {
            this.errors.push({email:"Invalid Email"});
        }
	}

    if (validator.isEmpty(req.body.phoneNo)) {
		this.errors.push({phoneNo:"Mobile Number cannot be empty"});
	}else if(!/^\d{10}$/.test(req.body.phoneNo)){
        this.errors.push({phoneNo:"Invalid Mobile Number"});
    }

    if (validator.isEmpty(req.body.message)) {
		this.errors.push({message:"Message cannot be empty"});
	}
   
    if (this.errors.length!=0) {
		return res.json({"errors":this.errors});
	}

    next();
}