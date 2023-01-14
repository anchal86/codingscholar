const{throwError}=require('../errors/custom-errors')
const sendEmail = require('../utils/sendEmail')
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.signUp=(req,res)=>{
    const user = new User(req.body);
    user.save((err,user)=>{
        if(err){
            return res.status(400).json({errors:err})
        }

        res.status(201).json({msg:user});
    })
}

exports.signIn=async(req,res)=>{

    let user = await User.findOne({email:req.body.username})
    // console.log(user)
    if(!user){
        user = await User.findOne({mobile:req.body.username})
        if(!user){
            return res.status(400).json({errors:"Username does not Exist"})
        }
    }
    let password = req.body.password
    if(user.checkPassword(password)){
        const token = jwt.sign({'id':user._id,'role':user.role},process.env.SECRET)
        // console.log(token)
        return res.status(201).json({'token':token,'user':user})
    }else{
        return res.status(401).json({'errors':"Invalid Username or Password"})
    }
}

exports.signOut=async(req,res)=>{

    


}

exports.deleteUser=async(req,res)=>{
    const _id = req.params.id
    let user = await User.findById({_id})
    if(!user){
        return next(throwError("No Data Found",404));
    }
    let data = await User .findByIdAndDelete(req.params.id)
    res.status(201).json({msg:data});
}

exports.getAllUsers=async(req,res)=>{
    let users = await User.find({})
    if(users.length==0){
        return res.status(404).json({error:"No Data Found"})
    }

    res.status(201).json({msg:users})
}

exports.getUserById=async(req,res)=>{

    const _id = req.params.id;
    let user = await User.findOne({_id})
    if(!user){
        return res.status(401).json({error:'UserID not found.'})
    }

    res.status(201).json({msg:user})


}

exports.getUserByEmail=async(req,res)=>{
  
    const email = req.body.email;
    let user = await User.findOne({email})
    if(!user){
        return res.status(401).json({error:'User Not Exist'})
    }
    res.status(201).json({msg:user})
}

exports.getUserByMobile=async(req,res)=>{
    
    const mobile = req.body.mobile;
    let user = await User.findOne({mobile})
    if(!user){
        return res.status(401).json({error:'User Not Exist'})
    }
    res.status(201).json({msg:user})
}

exports.forgotPassword=async(req,res,next)=>{
    const user = await User.findOne({email:req.body.email})
    if(!user){
        return next(throwError("No User found with this Email",404))
    }
    
    //get reset token
    const resetToken=user.getResetPasswordToken()
	await user.save({validateBeforeSave:false})

    // Create Reset Password URL
    const resetURL=`${req.protocol}://${req.get('host')}/api/vi/user/password/reset/${resetToken}`
    const message=`Your password reset token is as follows \n\n${resetURL}\n\n
                    if You have not requested This email then ignore it`

    try{
       
        
        await sendEmail({
            email:user.email,
            subject:'Coding Scholar Password Recovery',
            message
        })

        res.status(201).json({msg:`Mail Sent Successfully to ${user.email}`})
    }catch(error){
        
        user.resetPasswordToken=undefined
        user.resetPasswordExpire=undefined
        await user.save({validateBeforeSave:false})
        return next(throwError(error.message,500))
    }

}
exports.resetPassword=async(req,res,next)=>{
    // console.log(req.params.token)
    const resetPasswordToken=crypto.createHash('sha256')
                                   .update(req.params.token)
                                   .digest('hex')
    console.log(resetPasswordToken)
    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire:{$gt:Date.now()}
    })
    
    if(!user){

        return next(throwError("Password Reset Token is invalid or expired",400))
    }
    if(req.body.password!=req.body.confirmPassword){
        return next(throwError("Password and Confirm Password Does not match",403))
    }
    //setup new password
    user.password=req.body.password

    user.resetPasswordToken=undefined
    user.resetPasswordExpire=undefined

    await user.save()
    res.status(201).json(user)
}
    