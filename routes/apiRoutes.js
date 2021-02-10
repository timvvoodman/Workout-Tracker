const db = require("../models");

///Add exercises to the most recent workout plan.

//Add new exercises to a new workout plan.

//View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//View the total duration of each workout from the past seven workouts on the `stats` page.

module.exports = function (app) {
  //GET: Workout data
  app.get("/api/workouts", function (req, res) {
    db.workouts
      .find({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //Put: Add Exercise to new workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    db.workouts
      .findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true, runValidators: true }
      )
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  //POST: Create new Workout
  app.post("/api/workouts", (req, res) => {
    db.workouts
      .create({})
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((error) => {
        res.json(error);
      });
  });

  //GET: last 7 workouts
  app.get("/api/workouts/range", (req, res) => {
    db.workouts
      .find({})
      .limit(7)
      .then((dbWorkouts) => {
        console.log("Here is the last 7 workouts");
        console.log(dbWorkouts);
        res.json(dbWorkouts);
      })
      .catch((error) => {
        res.json(error);
      });
  });
};
