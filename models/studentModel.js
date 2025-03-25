const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  learningStyle: { type: String }, // e.g., visual, auditory, kinesthetic
  grade: { type: String },
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;