const{throwError}=require('../errors/custom-errors')
const Course = require('../models/Course');
const Post = require('../models/Post');
const Contact = require('../models/Contact');
const Subscriber = require('../models/Subscriber');

/* 
    Stats
    /api/v1/stats
*/
exports.stats=async(req,res,next)=>{
    // let post = await Post.find({})
    let course = await Course.find({})
    let contact = await Contact.find({})
    let subscribers = await Subscriber.find({})
    // if(post.length===0)
    //     return next(throwError("No Post Found"))
    if(course.length===0)
        return next(throwError("No Course Found"))
    else if(contact.length===0)
        return next(throwError("No Contact Found"))
    else if(subscribers.length===0)
        return next(throwError("No Subscriber Found"))
    let data={
        // posts:post.length,
        courses:course.length,
        contacts:contact.length,
        subscribers:subscribers.length
    }
    
    res.status(201).json({msg:data})
   
}