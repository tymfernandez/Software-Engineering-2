const mongoose = require("mongoose");

// Form 7 Schema
const form7Schema = new mongoose.Schema({
  kpCaseNumber: {
    type: String,
    required: true,
    trim: true,
  },
  maySumbong: {
    type: String,
    required: true,
    trim: true,
  },
  ipinagsumbong: {
    type: String,
    required: true,
    trim: true,
  },
  usapingBlg: {
    type: String,
    required: true,
    trim: true,
  },
  ukolSa: {
    type: String,
    required: true,
    trim: true,
  },
  reklamo: {
    type: String,
    required: true,
    trim: true,
  },
  kalunasan: {
    type: String,
    required: true,
    trim: true,
  },
  day: {
    type: String,
    required: true,
    trim: true,
  },
  month: {
    type: String,
    required: true,
    trim: true,
  },
  year: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Add timestamps to track creation and update times
});

// Export Form 7 Model
module.exports = mongoose.model("Form7", form7Schema);