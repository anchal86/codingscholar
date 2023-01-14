const express = require('express');
const router = express.Router();
// const {isAdmin, isUser} = require('../middlewares/authorization')
const {stats} = require('../controllers/StatsController');


router.get('/',stats);



module.exports=router;