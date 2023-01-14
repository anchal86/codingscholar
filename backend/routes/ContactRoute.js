const express = require('express');
const router = express.Router();
const {isAdmin, isUser} = require('../middlewares/authorization')
const {contactValidator} = require('../validators/ContactValidator')
const {saveContact,getAllContacts,getContactByEmail,
    getContactByMobile,deleteContact, getContactByID}=require('../controllers/ContactController');

router.post('/', contactValidator, saveContact);
router.get('/',getAllContacts);
router.get('/:id',getContactByID);
router.get('/email/:email',getContactByEmail);
router.get('/mobile/:phoneNo',getContactByMobile);
router.delete('/:id',deleteContact);

module.exports=router;