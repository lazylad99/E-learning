// studentController.js

const Student = require('../models/students');

// Get all students
const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
// Update a student by ID
const updateStudentById = async (req, res) => {
    try {
        const { fullName, email, phoneNo, dateOfBirth, profilePicUrl } = req.body;
        // Check if any required fields are missing
        if (!fullName || !email || !phoneNo || !dateOfBirth || !profilePicUrl) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const student = await Student.findByIdAndUpdate(req.params.id, {
            fullName,
            email,
            phoneNo,
            dateOfBirth,
            profilePicUrl
        }, { new: true });
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a student by ID
const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getAllStudents, getStudentById, updateStudentById, deleteStudentById };