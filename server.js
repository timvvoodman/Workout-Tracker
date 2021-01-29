const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

//const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

///Add exercises to the most recent workout plan.

//Add new exercises to a new workout plan.

//View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//View the total duration of each workout from the past seven workouts on the `stats` page.

app.listen(PORT, () => {
  console.log(`Workout Tracker is running on port ${PORT}!`);
});
