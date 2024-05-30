const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    pdfUrl: {
      type: String
    },
    imagesUrl: {
      type: [String]
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    expirationDate: {
      type: Date,
      default: function () {
        return new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
      }
    },
    isPublished: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;