const jwt = require('jsonwebtoken');
require('dotenv').config();
const Student = require('../models/Student');
const Instructor = require('../models/instructor');

// Middleware function for student authentication
const studentAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Assuming token is stored in a cookie
        if (!token) {
            throw new Error('Authorization failed!');
        }
        
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        const student = await Student.findOne({ _id: decoded._id, 'tokens.token': token });
        
        if (!student) {
            throw new Error('Authorization failed!');
        }

        req.student = student;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authorization failed!' });
    }
};

// Middleware function for instructor authentication
const instructorAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Assuming token is stored in a cookie
        if (!token) {
            throw new Error('Authorization failed!');
        }
        
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        const instructor = await Instructor.findOne({ _id: decoded._id, 'tokens.token': token });
        
        if (!instructor) {
            throw new Error('Authorization failed!');
        }

        req.instructor = instructor;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Authorization failed!' });
    }
};

module.exports = { studentAuth, instructorAuth };
