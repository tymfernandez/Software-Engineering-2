const mongoose = require("mongoose");

// Form 7 Schema
const form7Schema = new mongoose.Schema(
  {
    kpCaseNumber: {
      type: Number, // Changed to Number since we're using a counter
      required: true,
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
      type: Number, // Changed to Number since we're using a counter
      required: true,
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
    status: {
      // Added status field
      type: String,
      default: "Pending",
      enum: ["Pending", "In Progress", "Resolved", "Closed"],
    },
    priority: {
      // Added priority field
      type: String,
      default: "Medium",
      enum: ["Low", "Medium", "High"],
    },
  },
  {
    timestamps: true,
  }
);

const Form7 = mongoose.model("Form7", form7Schema);
module.exports = Form7;
