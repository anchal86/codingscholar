const{throwError}=require('../errors/custom-errors')
const Course = require('../models/Course');
const Post = require('../models/Post');
const _ = require('lodash');
// const cloudinary = require('cloudinary');
const {cloudinary}=require("../utils/cloudinary")
// const { json } = require('body-parser');

/* 
    Create New Course
    /api/v1/course
*/
exports.createCourse=async(req,res,next)=>{
    let image=await cloudinary.uploader.upload(req.body.image,{upload_preset:"course"})
    req.body.image={
        public_id:image.public_id,
        url:image.secure_url
    }
    let course = await Course.create(req.body)
    res.json({msg:course})
    
   
}
/* 
    Get All Courses
   /api/v1/course
*/
exports.getAllCourses=async(req,res,next)=>{
    let courses = await Course.find({})
    let arr=[]
        for(data of courses){
            let item=await Post.find({'courseID':data._id})
            arr.push({course:data,postCount:item.length,firstPost:item[0]})
        }
        
    res.status(201).json({msg:arr})
    
}
/* 
    Get Course By ID
   /api/v1/course/:id
*/
exports.getCourseById=async(req,res,next)=>{
    let course = await Course.findById(req.params.id)
    let courseID = req.params.id
    let coursePosts=await Post.find({courseID:courseID})
    if(!course){
        return next(throwError("Invalid Course ID"))
    }
  // if(coursePosts.length!==0){
            res.json({msg:course,totalPosts:coursePosts.length,posts:coursePosts})
            
        // }
    
   
}
/* 
    Get Latests Courses
    /api/v1/course/latests
*/
exports.getLatestsCourses=async(req,res,next)=>{
    let courses = await Course.find({}).limit(6)
    let arr=[]
        for(data of courses){
            let item=await Post.find({'courseID':data._id})
            arr.push({course:data,postCount:item.length,firstPost:item[0]})
        }
        
    res.status(201).json({msg:arr})
}
/* 
    Get Course By Name
   /api/v1/course/name/:name
*/
exports.getCourseByName=async(req,res,next)=>{
    let courses = await Course.find({name:new RegExp(req.params.name, 'i')})
    if(courses.length===0){
        return next(throwError("Invalid Course Name"))
    }
    res.status(201).json({msg:courses})
}
/* 
    Update Course
   /api/v1/course/:id
*/
exports.updateCourse=async(req,res,next)=>{

    
    let course = await Course.findById(req.params.id);
    if(!course)return next(throwError("No Data Found"));
    

    if(typeof(req.body.image)==='string'){
        if(course.image.public_id){
            const img = await cloudinary.uploader
            .destroy(course.image.public_id)
        }
   
        
            let image=await cloudinary.uploader
            .upload(req.body.image,{upload_preset:"course"})
            req.body.image={
                public_id:image.public_id,
                url:image.secure_url
            }
    
    }
    // console.log("hello")
    let update =_.extend(course,req.body)
    update.save((err,data)=>{
        if(err) return
        return res.json({msg:data})
    })
    

    
    
}
/* 
    Delete Course
   /api/v1/course/:id
*/
exports.deleteCourse=async(req,res,next)=>{
    let course = await Course.findById(req.params.id);
    if(!course){
        return next(throwError("No Data Found"));
    }
    let data = await Course.findByIdAndDelete(req.params.id)
    res.json({msg:data});
}