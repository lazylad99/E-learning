const Course = require('../models/course');

// Get all courses
const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Get a course by ID
const getCourseById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Update a course by ID
const updateCourseById = async (req, res) => {
    try {
        const { instructorId, videosList, description } = req.body;
        // Check if any required fields are missing
        if (!instructorId || !videosList || !description) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const course = await Course.findByIdAndUpdate(req.params.id, {
            instructorId,
            videosList,
            description
        }, { new: true });
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json(course);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// Delete a course by ID
const deleteCourseById = async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getAllCourses, getCourseById, updateCourseById, deleteCourseById};