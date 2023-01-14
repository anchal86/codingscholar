const jwt = require('jsonwebtoken');

signInRequired=(req,res)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.json({errors:'No Token Provided'});
    }
    const token = authHeader.split(' ')[1]
    try{
        const decode = jwt.verify(token,process.env.SECRET);
        req._id=decode.id
        req.role=decode.role
    }catch(err){
        return res.json({errors:'Invalid Token'})
    }

    return req;
}
exports.isAdmin=async(req,res,next)=>{
    let request = signInRequired(req,res)
    if(request._id){
        const role = request.role
        if(role!=1){
            return res.json({errors:'You are not authorized to access this route.'})
        }
        next();
    }
}