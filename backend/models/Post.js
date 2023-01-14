const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"Post Title Cannot be Empty"],
        trim:true
    },
    slug:{
        type:String,
        required:[true,"Post Slug Cannot be Empty"],
        trim:true
    },
    postContent:{
        type:String,
        required:[true,"Post Content Cannot be Empty"]
    },
    metaDescription:{
        type:String,
        required:[true,"Meta Description Cannot be Empty"],
        min: 50, max: 160
    },
    metaKeywords:{
        type:String,
        required:[true,"Meta Keywords Cannot be Empty"]
    },
    image:[
        {

            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,   
                required:true
             }
             
            
        }
    ],
    courseID:
    {
    	type: mongoose.Schema.Types.ObjectId,
    	trim: true,
    	ref: "Courses"
    }
},
    {timestamps:true}
)

module.exports = mongoose.model("Posts", postSchema);