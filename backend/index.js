//modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('express-async-errors');
require('dotenv').config();

//custom modules
const notFound = require('./middlewares/not-found')
const {errorHandlerMiddleware}=require('./middlewares/error-handler');
const connectDB = require('./database/connect')

//app
const app = express();

//Middlewares
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json());
// app.use(express.json());

const PORT = process.env.PORT || 8000;
let allowedOrigin = ['http://localhost:3000'];


// app.use(express.static('public'))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
// app.use(cors({origin:allowedOrigin, credentials:true}));
app.use(cors())

// app.use(bodyParser.urlencoded({extended:true}));

//Routes
userRoute = require('./routes/UserRoute')
courseRoute = require('./routes/CourseRoute');
postRoute = require('./routes/PostRoute');
subsRoute = require('./routes/SubscriberRoute');
contactRoute = require('./routes/ContactRoute');
statsRoute = require('./routes/StatsRoute');

//Routes Middleware

app.use('/api/v1/user', userRoute);
app.use('/api/v1/course', courseRoute);
app.use('/api/v1/post', postRoute);
app.use('/api/v1/subscriber',subsRoute);
app.use('/api/v1/contact',contactRoute);
app.use('/api/v1/stats', statsRoute);






app.get('/', (req, res)=>{

	res.json({

		message: "Welcome from Coding Scholar"

	});

});

app.use(notFound)
app.use(errorHandlerMiddleware)

const startApp = async()=>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT,()=>{
	
            console.log(`Server started at ${PORT}`);
        });
    }catch(error){
            console.log(error)
    }

}

startApp();