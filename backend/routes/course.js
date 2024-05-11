const express = require('express');
const router = express.Router();
const { getAllCourses, getCourseById, updateCourseById, deleteCourseById } = require('../controllers/courseController');

// Route for fetching all courses
router.get('/', getAllCourses);

// Route for fetching a course by ID
router.get('/:id', getCourseById);

// Route for updating a course by ID
router.put('/:id/updateDetails', updateCourseById);

// Route for deleting a course by ID
router.delete('/:id/deleteCourse', deleteCourseById);

module.exports = router;