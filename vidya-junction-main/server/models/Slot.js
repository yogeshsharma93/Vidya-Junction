const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Slot schema
const slotSchema = new Schema({
  className: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  subtopics: {
    type: [String], // Array of subtopics
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  attendance: [
    {
      type: Boolean,
      default: false,
    },
  ],
});

// Create the Slot model
const Slot = mongoose.model("Slot", slotSchema);

// Export the Slot model
module.exports = Slot;
