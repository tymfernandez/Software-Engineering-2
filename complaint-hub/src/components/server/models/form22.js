const mongoose = require('mongoose');

const form22Schema = new mongoose.Schema({
  form22KpNum: { type: Number, required: true },
  form22Blg: { type: Number, required: true },
  form22Ukol: { type: String, required: true },
  form22MaySumbong: { type: String, required: true },
  form22MaySumbong1: { type: String, required: true },
  form22IpinagSumbong: { type: String, required: true },
  form22IpinagSumbong1: { type: String, required: true },
  form22Pangalan: { type: String, required: true },
  form22Pangalan1: { type: String, required: true },
  form22Day: { type: String, required: true },
  form22Month: { type: String, required: true },
  form22Year: { type: String, required: true }
}, { timestamps: true });

const Form22 = mongoose.model('Form22', form22Schema);
module.exports = Form22;