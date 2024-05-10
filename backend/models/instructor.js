const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNo: { type: String },
    dateOfBirth: { type: Date },
    profilePicUrl: { type: String },
    expertise: { type: String },
    subjects: [{ type: String }],
    availability: { type: String },
    coursesList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
    // Add other instructor-related fields here
});

module.exports = mongoose.model('Instructor', instructorSchema);
