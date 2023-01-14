const {CustomAPIError} = require('../errors/custom-errors')
exports.errorHandlerMiddleware =(err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        return res.json({errors:err.message})
    }
    console.log(err);
    return res.status(500).json({errors:'Something Went wrong please try again later'})
}
