const mongoose = require('mongoose');

const form8Schema = new mongoose.Schema({
  kpCaseNumber: {
    type: Number, // Changed to Number since we're using a counter
    required: true, // The case number is required
  },
  kay: {
    type: String,
    required: true, // The recipient's name is required
  },
  maySumbong: {
    type: String,
    required: true, // The complainant's name(s) is required
  },
  date: {
    type: String, // Date format could be `dd month, yyyy` or a similar format
    required: true,
  },
  time: {
    type: String, // Time format (e.g., 8:00 AM)
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set the creation date to now
  },
});

const Form8 = mongoose.model('Form8', form8Schema);

module.exports = Form8;
