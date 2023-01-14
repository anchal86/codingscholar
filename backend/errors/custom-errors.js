class CustomAPIError extends Error{
    constructor (message){
        super(message)
        // this.statusCode=statusCode
    }
}
const throwError=(msg)=>{
    return new CustomAPIError(msg)
}
module.exports={throwError,CustomAPIError}