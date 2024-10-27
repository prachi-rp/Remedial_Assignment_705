const mongoose = require('../config/db')

const developerSchema = new mongoose.Schema({
  name: String,
  registrationCode: String,
  dob: Date,
  city: String,
  degree: [String], // Ensure this is an array of strings
  password: String,
  files: [String]
});
const develop = mongoose.model('Developer', developerSchema, 'devlopers');
module.exports = develop;