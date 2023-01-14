const validator = require('validator');
const Post = require('../models/Post');

exports.createPostValidator=async(req,res,next)=>{
    this.errors=[];
    if (validator.isEmpty(req.body.title)) {
        this.errors.push({title:"Post Title Cannot be Empty"});
    }else{
		req.body.title = req.body.title.toLowerCase();
		//Check Post Title Existance.
		let post = await Post.findOne({title:req.body.title,courseID:req.body.courseID})
		if(req.params.id){
			if (post)
				if(post._id===req.params.id) {
					this.errors.push({title:"This Post Title is Already Exist"});
				}
		}else{
			if (post) {
				this.errors.push({title:"This Post Title is Already Exist"});
			}
		}
		
	}
    if (validator.isEmpty(req.body.slug)) {
        this.errors.push({slug:"Post Slug Cannot be Empty"});
    }else{
		req.body.slug = req.body.slug.toLowerCase();
		//Check Post Slug Existance.
		let post = await Post.findOne({slug:req.body.slug, courseID:req.body.courseID})
		if(req.params.id){
			if (post)
				if(post._id===req.params.id) {
					this.errors.push({slug:"This Slug is Already Exist"});
				}
		}else{
			if (post) {
				if (post) {
					this.errors.push({slug:"This Slug is Already Exist"});
				}
			}
		}
		
	}
    if (validator.isEmpty(req.body.postContent)) {
        this.errors.push({postContent:"Post Content Cannot be Empty"});
    }
    if(validator.isEmpty(req.body.metaDescription)){
        this.errors.push({metaDescription:"Meta Description Cannot be Empty"})
    }else if(!validator.isLength(req.body.metaDescription,{min:50, max:160})){
        this.errors.push({metaDescription:"Meta Description Length Should be between 50 and 160 characters"});
    }else{
		req.body.metaDescription = req.body.metaDescription.toLowerCase();
		//Check Meta Description Existance.
		let post = await Post.findOne({metaDescription:req.body.metaDescription})
		if(req.params.id){
			if (post)
				if(post._id===req.params.id) {
					this.errors.push({metaDescription:"This Meta Description is Already Exist"});
				}
		}else{
			if (post) {
				if (post) {
					this.errors.push({metaDescription:"This Meta Description is Already Exist"});
				}
			}
		}
		
	}
    if(validator.isEmpty(req.body.metaKeywords)){
        this.errors.push({metaKeywords:"Meta Keywords Cannot be Empty"})
    }
    if(validator.isEmpty(req.body.courseID)){
        this.errors.push({courseID:"Course ID cannot be empty"});
    }

    if (this.errors.length!=0) {
		return res.json({"errors":this.errors});
	}

	next();
}