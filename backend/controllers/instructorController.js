const Instructor = require("../models/Instructor");

// Controller function to fetch all instructors
const getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.find();
        res.status(200).json({ instructors });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to fetch a single instructor by ID
const getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }
        res.status(200).json({ instructor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller function to update an instructor's profile
const updateInstructorProfile = async (req, res) => {
    try {
        const { fullName, email, phoneNo, dateOfBirth, profilePicUrl, expertise, subjects, availability } = req.body;
        const instructor = await Instructor.findByIdAndUpdate(req.params.id, {
            fullName,
            email,
            phoneNo,
            dateOfBirth,
            profilePicUrl,
            expertise,
            subjects,
            availability
        }, { new: true });

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.status(200).json({ message: 'Instructor profile updated successfully', instructor });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Controller function to delete an instructor's profile
const deleteInstructorProfile = async (req, res) => {
    try {
        const instructor = await Instructor.findByIdAndDelete(req.params.id);

        if (!instructor) {
            return res.status(404).json({ message: 'Instructor not found' });
        }

        res.status(200).json({ message: 'Instructor profile deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllInstructors, getInstructorById, updateInstructorProfile, deleteInstructorProfile };
