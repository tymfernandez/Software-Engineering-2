const mongoose = require("mongoose");

const form14Schema = new mongoose.Schema({
  form14KpNum: { type: Number, required: true },
  form14Blg: { type: Number, required: true },
  form14Ukol: { type: String, required: true },
  form14MaySumbong: { type: String, required: true },
  form14MaySumbong1: { type: String, required: true },
  form14IpinagSumbong: { type: String, required: true },
  form14IpinagSumbong1: { type: String, required: true },
  form14Day: { type: String, required: true },
  form14Month: { type: String, required: true },
  form14Year: { type: String, required: true },
}, { timestamps: true });

const Form14 = mongoose.model("Form14", form14Schema);
module.exports = Form14;