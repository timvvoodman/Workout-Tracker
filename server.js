//Dependencies//
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Create Port
const PORT = process.env.PORT || 3000;

//link to mongoDB models
//const db = require("./models");

//initialize express server
const app = express();

//Data parsing w/Express
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbname", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//ROUTER//

//html//
require("./routes/htmlRoutes")(app);

//api//
require("./routes/apiRoutes")(app);

///Add exercises to the most recent workout plan.

//Add new exercises to a new workout plan.

//View the combined weight of multiple exercises from the past seven workouts on the `stats` page.

//View the total duration of each workout from the past seven workouts on the `stats` page.

app.listen(PORT, () => {
  console.log(`Workout Tracker is running on port ${PORT}!`);
});
