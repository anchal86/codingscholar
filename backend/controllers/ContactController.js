const {throwError}=require('../errors/custom-errors')
const Contact = require('../models/Contact');
const _ = require('lodash');

/* 
    Save New Contact
    /api/v1/contact
*/
exports.saveContact=async(req,res,next)=>{
    let contact = await Contact.create(req.body)
    res.json({msg:contact})
}

/* 
    Get All Requests
   /api/v1/contact
*/
exports.getAllContacts=async(req,res,next)=>{
    let contacts = await Contact.find({})
    if(contacts.length===0){
        return next(throwError("No Data to show "))
    }
    res.status(201).json({totalRequests:contacts.length,msg:contacts})
}
/* 
    Get Request By Email
   /api/v1/contact/email/:email
*/
exports.getContactByEmail=async(req,res,next)=>{
    let contact = await Contact.find({email:req.params.email})
    if(contact.length===0){
        return next(throwError("Invalid Contact Email"))
    }
    res.status(201).json({msg:contact})
}
/*
    Get Request By Mobile
    /api/v1/contact/mobile/:phoneNo
*/
exports.getContactByMobile=async(req,res,next)=>{
    let contact = await Contact.find({phoneNo:req.params.phoneNo})
    if(contact.length===0){
        return next(throwError("Invalid Contact PhoneNo"))
    }
    res.json({msg:contact})

}
exports.getContactByID=async(req,res,next)=>{
    let contact = await Contact.findById(req.params.id)
    if(contact.length===0){
        return next(throwError("Invalid Contact Request ID"))
    }
    res.json({msg:contact})
}
/* 
    Delete Contact
   /api/v1/contact/:id
*/
exports.deleteContact=async(req,res,next)=>{
    let contact = await Contact.findById(req.params.id);
    if(!contact){
        return next(throwError("No Data Found"));
    }
    let data = await Contact.findByIdAndDelete(req.params.id)
    res.status(201).json({msg:data});
}