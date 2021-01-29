const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExercisesSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Must Choose Resistance or Cardio",
  },

  name: {
    type: String,
    unique: true,
    required: "Provide exercise name",
  },
  duration: {
    type: Number,
    required: "Enter estimated Duration",
  },
  weight: {
    type: Number,
    required: "Enter a Weight",
  },
  reps: {
    type: Number,
    required: "Enter number of Reps",
  },
  sets: {
    type: Number,
    required: "Enter number of Sets",
  },
});

const Exercises = mongoose.model("Exercises", ExercisesSchema);

module.exports = Exercises;
