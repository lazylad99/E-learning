const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcrypt');
const Student = require('../models/students');
const Instructor = require('../models/Instructor');

// Store JWT secret key in a variable
const jwtSecret = process.env.jwtSecret;

// Controller function for student registration
const registerStudent = async (req, res) => {
    try {
        const { fullName, email, password, phoneNo, dateOfBirth, profilePicUrl } = req.body;
        // You can add validation logic here if needed

        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const student = new Student({
            fullName,
            email,
            password: hashedPassword,
            phoneNo,
            dateOfBirth,
            profilePicUrl
        });

        await student.save();

        // Generate JWT token
        const token = jwt.sign({ _id: student._id }, jwtSecret);

        res.cookie('token', token, { httpOnly: true }); // Store token in cookie
        res.status(201).json({ message: 'Student registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function for student login
const loginStudent = async (req, res) => {
    try {
        const { email, password } = req.body;
        // You can add validation logic here if needed

        const student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordMatch = await bcrypt.compare(password, student.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: student._id }, jwtSecret);

        res.cookie('token', token, { httpOnly: true }); // Store token in cookie
        res.status(200).json({ message: 'Student logged in successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function for instructor registration
const registerInstructor = async (req, res) => {
    try {
        const { fullName, email, password, phoneNo, dateOfBirth, profilePicUrl, expertise, subjects, availability } = req.body;
        // You can add validation logic here if needed

        const existingInstructor = await Instructor.findOne({ email });
        if (existingInstructor) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const instructor = new Instructor({
            fullName,
            email,
            password: hashedPassword,
            phoneNo,
            dateOfBirth,
            profilePicUrl,
            expertise,
            subjects,
            availability
        });

        await instructor.save();

        // Generate JWT token
        const token = jwt.sign({ _id: instructor._id }, jwtSecret);

        res.cookie('token', token, { httpOnly: true }); // Store token in cookie
        res.status(201).json({ message: 'Instructor registered successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function for instructor login
const loginInstructor = async (req, res) => {
    try {
        const { email, password } = req.body;
        // You can add validation logic here if needed

        const instructor = await Instructor.findOne({ email });
        if (!instructor) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordMatch = await bcrypt.compare(password, instructor.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ _id: instructor._id }, jwtSecret);

        res.cookie('token', token, { httpOnly: true }); // Store token in cookie
        res.status(200).json({ message: 'Instructor logged in successfully', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function for logout
const logout = async (req, res) => {
    try {
        res.clearCookie('token'); // Clear the token from cookie
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerStudent, loginStudent, registerInstructor, loginInstructor, logout };
