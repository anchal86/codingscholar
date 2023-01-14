const express = require('express');
const router = express.Router();
const{isAdmin, isUser}=require('../middlewares/authorization');
const{signUp, signIn, getAllUsers, getUserById, getUserByEmail, getUserByMobile, forgotPassword, resetPassword}=require('../controllers/UserController');
const{signUpValidator, signInValidator}=require('../validators/UserValidator');

router.post('/signup', signUpValidator, signUp);
router.post('/signin', signInValidator, signIn);
router.get('/allusers', getAllUsers);
router.get('/:id', getUserById);
router.post('/email',getUserByEmail);
router.post('/mobile',getUserByMobile);
router.post('/forgotpassword',forgotPassword);
router.put('/password/reset/:token',resetPassword);


module.exports = router;