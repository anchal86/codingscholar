const {throwError}=require('../errors/custom-errors')
const Post = require('../models/Post');
const Course = require('../models/Course');
const _ = require('lodash');

/* 
    Create New Post
    /api/v1/post
*/
exports.createPost=async(req,res,next)=>{
    let post = await Post.create(req.body)
    res.json({msg:post})
}
/* 
    Get All Posts
    /api/v1/post/
*/
exports.getAllPosts=async(req,res,next)=>{
    let posts = await Post.find({})
    if(posts.length===0){
        return next(throwError("No Post Find"));
    }
    res.status(201).json({totalPosts:posts.length,msg:posts})
}
/* 
    Get Latests Posts
    /api/v1/post/latests
*/
exports.getLatestsPosts=async(req,res,next)=>{
    let posts = await Post.find().limit(5)
    if(posts.length===0){
        return next(throwError("No Latest Post to show"));
    }
    res.status(201).json({msg:posts})
}
/* 
    Get Posts by CourseID
    /api/v1/post/posts/:courseID
*/
exports.postsByCourseID=async(req,res,next)=>{
    let posts = await Post.find({courseID:req.params.courseID})
    // if(posts.length===0){
    //     return next(throwError("No Post Find",404));
    // }
    res.json({totalPosts:posts.length,msg:posts})
}
/* 
    Get Post By ID
    /api/v1/post/:id
*/
exports.getPostById=async(req,res,next)=>{
    let post = await Post.findById(req.params.id);
    if(!post){
        return next(throwError("No Post Found"));
    }
    res.status(201).json({msg:post});
}
/* 
    Get Post By Title
    /api/v1/post/name/:title
*/
exports.getPostByTitle=async(req,res,next)=>{
    let posts = await Post.find({title:new RegExp(req.params.title, 'i')})
    if(posts.length===0){
        return next(throwError("Invalid Post Title"))
    }
    res.status(201).json({matchCases:posts.length,msg:posts})
}
/* 
    Get Post By Slug
    /api/v1/post/name/:title
*/
exports.getPostBySlug=async(req,res,next)=>{
    let post = await Post.findOne({slug:req.params.slug})
    if(post.length===0){
        return next(throwError("Invalid Post Slug"))
    }
    res.status(201).json({msg:post})
}
/* 
    Previous Post
    /api/v1/post/prev/:id
*/
exports.prevPost=async(req,res,next)=>{
    let cp = await Post.findById(req.params.id);
    let courseID = cp.courseID;
    let post = await Post.find({courseID:courseID}).sort({_id:+1}).limit(1);
    if(post.length===0){
        return next(throwError("Something Wrong"))
    }
    res.status(201).json({msg:post})
}

exports.nextPost=async(req,res,next)=>{
    let cp = await Post.findById(req.params.id);
    let courseID = cp.courseID;
    let post = await Post.find({courseID:courseID}).sort({_id:-1}).limit(1);
    if(post.length===0){
        return next(throwError("Something Wrong"))
    }
    res.status(201).json({msg:post})
}

/* 
    Update Post
    /api/v1/post/:id
*/
exports.updatePost=async(req,res,next)=>{
    let post = await Post.findById(req.params.id);
    if(!post){
        return next(throwError("No Data Found"));
    }
    let data = await Post.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.status(201).json({msg:data});
}
/* 
    Delete Post
    /api/v1/post/:id
*/
exports.deletePost=async(req,res,next)=>{
    let post = await Post.findById(req.params.id);
    if(!post){
        return next(throwError("No Data Found"));
    }
    let data = await Post.findByIdAndDelete(req.params.id)
    res.status(201).json({msg:data});
}