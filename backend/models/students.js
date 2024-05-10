const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNo: { type: String },
    dateOfBirth: { type: Date },
    profilePicUrl: { type: String },
    subscribedInstructorId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }]
    // Add other student-related fields here
});

module.exports = mongoose.model('Student', studentSchema);
