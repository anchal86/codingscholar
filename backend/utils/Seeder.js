const mongoose = require('mongoose')
const Product = require('../models/Product')

const connectDB = require('../database/connect')
const data = require('../data/products')
const path = require('path')
require('dotenv').config({path:path.resolve(__dirname,'../.env')})

const addProduct=async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany({})
        console.log("Data Deleted")

        await Product.insertMany(data)
        console.log("Data Added")
        process.exit();
    }catch(err){
        console.log(err)
        process.exit();
    }
}
addProduct();