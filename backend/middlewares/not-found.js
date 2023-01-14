const notFound=(req, res)=>{
    res.status(404).send({error:'Route Does not Exist'})
}

module.exports = notFound