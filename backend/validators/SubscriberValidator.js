const validator = require('validator');
const Subscriber = require('../models/Subscriber');

exports.subscriberValidator=async(req,res,next)=>{
    this.errors=[];
    if(validator.isEmpty(req.body.email)){
        this.errors.push({email:"Email cannot be Empty"});
    }else{
        req.body.email = req.body.email.toLowerCase();
        if (!validator.isEmail(req.body.email)) {
            this.errors.push({email:"Invalid Email"});
        }else{
            let subscriber = await Subscriber.findOne({email:req.body.email})
            if (subscriber) {
                this.errors.push({email:"This Email is Already Exist"});
            }
        }
       
    }
    console.log(this.errors)
    if (this.errors.length!=0) {
		return res.json({"errors":this.errors});
	}
    
	next();
}