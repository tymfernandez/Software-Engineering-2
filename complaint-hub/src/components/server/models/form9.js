const mongoose = require("mongoose");

const form9Schema = new mongoose.Schema({
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
  time: {
    type: String,
    required: true,
    trim: true,
  },
  kay: {
    type: String,
    required: true,
    trim: true,
  },
  sumbongKay: {
    type: String,
    required: true,
    trim: true,
  },
  pangalan: {
    type: String,
    required: true,
    trim: true,
  },
  blank: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true, // Add timestamps to track creation and update times
});

const Form9 = mongoose.model("Form9", form9Schema);

module.exports = Form9;