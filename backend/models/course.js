const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    instructorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor', required: true },
    videosList: [{ type: String }], // Assuming videosList contains URLs of videos
    description: { type: String }
});

module.exports = mongoose.model('Course', courseSchema);
