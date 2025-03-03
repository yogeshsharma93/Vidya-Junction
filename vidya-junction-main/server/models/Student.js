const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: { type: Number },
  // Add any other relevant fields for the student
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
