const mongoose = require('mongoose');
const uuidv1 = require('uuidv1');
const crypto = require('crypto');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Cannot be Empty"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email cannot be Empty"],
        trim:true,
        unique:[true,"This Email is Already Exist"]
    },
    hashed_password:{
        type:String,
        required:[true,"Password cannot be Empty"]
    },
    mobile:{
        type:String,
        required:[true,"Mobile Number cannot be Empty"],
        trim:true,
        unique:[true,"This Mobile Number is Already Registered"]
    },
    salt:String,
    role:{
        type:Number,
        default:0
    },
},
    {timestamps:true}
)
userSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password=this.encryptPassword(password);
})
.get(()=>{
    return this._password
})

userSchema.methods={
    checkPassword:function(password){
        return this.encryptPassword(password)===this.hashed_password
    },
    encryptPassword:function(password){
        if(!password) return "";
        try{
            return crypto
            .createHmac("sha1", this.salt)
            .update(password)
            .digest("hex");
        }catch(err){
            return "";
        }
    },
    getResetPasswordToken:function(){
        const resetToken = crypto.randomBytes(20).toString('hex')

        this.resetPasswordToken=crypto.createHash('sha256')
                                      .update(resetToken) 
                                      .digest('hex')  
        this.resetPasswordExpire=Date.now()+30*60*1000
        return resetToken;   
    }
};

module.exports = mongoose.model("User",userSchema);