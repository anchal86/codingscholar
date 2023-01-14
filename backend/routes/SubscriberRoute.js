const express = require('express');
const router = express.Router();
const {isAdmin} = require('../middlewares/authorization')
const {subscriberValidator} = require('../validators/SubscriberValidator');
const {newSubscriber, getAllSubscribers, getSubscriberByEmail, deleteSubscriber} = require('../controllers/SubscriberController');

router.post('/',subscriberValidator,newSubscriber);
router.get('/',isAdmin,getAllSubscribers);
router.get('/:email',isAdmin,getSubscriberByEmail)
router.delete('/:id',isAdmin,deleteSubscriber);
    
module.exports=router;