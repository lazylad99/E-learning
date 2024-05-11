const express = require('express');
const router = express.Router();
const { getAllInstructors, getInstructorById,updateInstructorProfile, deleteInstructorProfile } = require('../controllers/instructorController');


// Route to fetch all instructors
router.get('/', getAllInstructors);

// Route to fetch a single instructor by ID
router.get('/:id', getInstructorById);

// Route to update an instructor's profile
router.put('/:id/updateProfile', updateInstructorProfile);

// Route to delete an instructor's profile
router.delete('/:id/deleteProfile', deleteInstructorProfile);


module.exports = router;