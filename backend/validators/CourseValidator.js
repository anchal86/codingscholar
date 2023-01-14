const validator = require('validator');
const Course = require('../models/Course');

exports.createCourseValidator=async(req,res,next)=>{
    this.errors={};
    if (validator.isEmpty(req.body.name)) {
		this.errors={...this.errors,"name":"Course Name Cannot be Empty"}
        // this.errors.push({name:"Course Name Cannot be Empty"});
    }else{
		req.body.name = req.body.name.toLowerCase();
		//Check Course Name Existance.
		let course = await Course.findOne({name:req.body.name})
		
		if (course) {
			this.errors={...this.errors,"name":"This Course is Already Exist"}
			// this.errors.push({name:"This Course is Already Exist"});
		}
	
		
	}

	if (validator.isEmpty(req.body.image)) {
		this.errors={...this.errors,"image":"Course Image Cannot be Empty"}
        // this.errors.push({image:"Course Image Cannot be Empty"});
    }
	// console.log(Object.keys(this.errors).length)
    if (Object.keys(this.errors).length!=0) {
		return res.json({"errors":this.errors});
	}

	// next();
}

exports.updateCourseValidator=async(req,res,next)=>{
    this.errors=[];
    if (validator.isEmpty(req.body.name)) {
        this.errors.push({name:"Course Name Cannot be Empty"});
    }else{
		req.body.name = req.body.name.toLowerCase();
		//Check Course Name Existance.
		let course = await Course.findOne({name:req.body.name})
		if(req.params.id){
			if (course)
				if(course._id===req.params.id) {
					this.errors.push({name:"This Course is Already Exist"});
				}
		}else{
			if (course) {
				if (course) {
					this.errors.push({name:"This Course is Already Exist"});
				}
			}
		}
		
	}

    if (this.errors.length!=0) {
		return res.json({"errors":this.errors});
	}

	next();
}