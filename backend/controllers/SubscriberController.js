const{throwError}=require('../errors/custom-errors')
const Subscriber = require('../models/Subscriber');
const _ = require('lodash');

/* 
    Add New Subscriber
    /api/v1/subscriber
*/
exports.newSubscriber=async(req,res,next)=>{
    // console.log(req.body);
    let subscriber = await Subscriber.create(req.body)
    res.status(201).json({msg:subscriber})
}
/* 
    Get All Subscriber
   /api/v1/subscriber
*/
exports.getAllSubscribers=async(req,res,next)=>{
    let subscribers = await Subscriber.find({})
    if(subscribers.length===0){
        return next(throwError("No Subscriber Find"))
    }
    res.status(201).json({totalSubscribers:subscribers.length,msg:subscribers})
}
/* 
    Get Subscribe By Email
   /api/v1/subscriber/email/:email
*/
exports.getSubscriberByEmail=async(req,res,next)=>{
    let subscribers = await Subscriber.find({email:new RegExp(req.params.email, 'i')})
    if(subscribers.length===0){
        return next(throwError("Invalid Subscriber Email"))
    }
    res.status(201).json({msg:subscribers})
}
/* 
    Delete Subscriber
   /api/v1/course/:id
*/
exports.deleteSubscriber=async(req,res,next)=>{
    let subscriber = await Subscriber.findById(req.params.id);
    if(!subscriber){
        return next(throwError("No Data Found"));
    }
    let data = await Subscriber.findByIdAndDelete(req.params.id)
    res.status(201).json({msg:data});
}