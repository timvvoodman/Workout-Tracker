const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercises", //from the Exercises collection
    },
  ],
});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;
