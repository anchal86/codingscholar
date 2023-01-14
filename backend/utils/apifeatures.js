class APIFeatures{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr;
    }
    search(){
        const query = this.queryStr.query ? {

            name:{
                $regex:this.queryStr.query,
                $options:'i'
            }

        }:{}
        // console.log(query);
        this.query=this.query.find({...query})
        return this;
    }

    filter(){
        const queryCopy = {...this.queryStr}
        const removeFields = ['keyword','page','limit']
        removeFields.forEach((el)=>delete queryCopy[el])

        let queryStr = JSON.stringify(queryCopy)
        queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g,match=>`$${match}`)
        this.query=this.query.find(JSON.parse(queryStr))
        return this;
    }
    pagination(resPerPage){
        const currentPage = Number(this.queryStr.page) || 1
        const skip = resPerPage * (currentPage-1)

        this.query=this.query.limit(resPerPage).skip(skip)
        return this;
    }
}

module.exports=APIFeatures;