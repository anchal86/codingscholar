const express = require('express');
const router = express.Router();
const {isAdmin, isUser} = require('../middlewares/authorization')
const {createPostValidator} = require('../validators/PostValidator');
const { createPost,updatePost,deletePost,getAllPosts,getPostById,
    getPostByTitle,postsByCourseID, getPostBySlug, 
    getLatestsPosts, prevPost, nextPost } = require('../controllers/PostController');

router.post('/',isAdmin,createPostValidator,createPost);
router.get('/posts/:courseID', postsByCourseID);
router.get('/',getAllPosts);
router.get('/latest',getLatestsPosts)
router.get('/:id',getPostById);
router.get('/prev/:id',prevPost);
router.get('/next/:id', nextPost);
router.get('/name/:title',getPostByTitle);
router.get('/slug/:slug', getPostBySlug);
router.put('/:id',isAdmin,createPostValidator,updatePost);
router.delete('/:id',isAdmin,deletePost);

module.exports=router;