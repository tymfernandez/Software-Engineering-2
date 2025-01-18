const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the complaint model
const complaintSchema = new Schema({
  kpCase: String,
  usapingBlg: String,
  date: Date,
  type: String,
  status: String,
  priority: String,
  form7: { type: Schema.Types.ObjectId, ref: 'Form7' } // Reference to Form7
});

const Complaint = mongoose.model("Complaint", complaintSchema);
module.exports = Complaint;