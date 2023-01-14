const validator = require('validator');
const User = require('../models/User');

exports.signUpValidator=async(req,res,next)=>{

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
        }else{
            
            let user = await User.findOne({email:req.body.email})
            if (user) {
                this.errors.push({email:"This Email is Already Exist"});
            }
        }
		
		
	}

    if (validator.isEmpty(req.body.password)) {
		this.errors.push({password:"Password cannot be empty"});
	}else if(req.body.password!=req.body.confirmPassword){
        this.errors.push({password:"Password and Confirm Password does not matched"});
    }else if(!validator.isStrongPassword(req.body.password)){
        this.errors.push({password:"Password Should Be Atleast 8 Character Long and should contain 1 Uppercase, 1 LowerCase, 1 Digit and 1 Special Character"});
    }

    if (validator.isEmpty(req.body.mobile)) {
		this.errors.push({mobile:"Mobile Number cannot be empty"});
	}else if(!/^\d{10}$/.test(req.body.mobile)){
        this.errors.push({mobile:"Invalid Mobile Number"});
    }else{

        let user = await User.findOne({mobile:req.body.mobile})
            if (user) {
                this.errors.push({mobile:"This Mobile Number is Already Exist"});
            }

    }
        

	if (this.errors.length!=0) {
		return res.json({"errors":this.errors});
	}

	next();

}

exports.signInValidator=async(req,res,next)=>{
    this.errors=[];

    if(validator.isEmpty(req.body.username) || validator.isEmpty(req.body.password)){
        this.errors.push({username:"Username aur Password cannot be Empty"});
    }
    if (this.errors.length!=0) {
		return res.status(400).json({"errors":this.errors});
	}
    
	next();
}

