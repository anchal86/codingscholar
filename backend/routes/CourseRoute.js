const express = require('express');
const router = express.Router();
const {isAdmin, isUser} = require('../middlewares/authorization')
const {createCourseValidator, updateCourseValidator} = require('../validators/CourseValidator')
const {createCourse, getAllCourses, getCourseById, getCourseByName, updateCourse, 
    deleteCourse, getLatestsCourses} = require('../controllers/CourseController');

router.post('/',isAdmin,createCourseValidator, createCourse);
router.get('/',getAllCourses);
router.get('/latest',getLatestsCourses)
router.get('/:id',getCourseById);
router.get('/name/:name',getCourseByName);
router.put('/:id', isAdmin, updateCourseValidator, updateCourse);
router.delete('/:id', isAdmin, deleteCourse);


module.exports=router;