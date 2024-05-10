const express = require('express');
const router = express.Router();
const { registerStudent, loginStudent, registerInstructor, loginInstructor, logout } = require('../controllers/userController');

// Routes for student registration and login
router.post('/student/register', registerStudent);
router.post('/student/login', loginStudent);

// Routes for instructor registration and login
router.post('/instructor/register', registerInstructor);
router.post('/instructor/login', loginInstructor);

// Route for logout (for both students and instructors)
router.get('/logout', logout);

module.exports = router;
