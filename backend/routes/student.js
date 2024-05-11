const express = require('express');
const router = express.Router();
const { getAllStudents, getStudentById, updateStudentById, deleteStudentById } = require('../controllers/studentController');

// Route for fetching all students
router.get('/', getAllStudents);

// Route for fetching a student by ID
router.get('/:id', getStudentById);

// Route for updating a student by ID
router.put('/:id/updateProfile', updateStudentById);

// Route for deleting a student by ID
router.delete('/:id/deleteProfile', deleteStudentById);
module.exports = router;