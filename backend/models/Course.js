const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
	name:
	{
		type: String,
		required: [true,"Course Name cannot be Empty"],
		trim: true
    },

    // parentCategoryID:
    // {
    // 	type: mongoose.Schema.Types.ObjectId,
    // 	trim: true,
    // 	ref: "Courses"
    // },
    image:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,   
            required:true
        }
        
    }
    
},{timestamps:true})

module.exports = mongoose.model("Courses", courseSchema);