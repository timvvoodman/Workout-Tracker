//Dependencies//
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

//Create Port
const PORT = process.env.PORT || 3000;

//link to mongoDB models
const db = require("./models");

//initialize express server
const app = express();

//Data parsing w/Express
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//ROUTER//

//html//
require("./routes/htmlRoutes.js")(app);

//api//
require("./routes/apiRoutes.js")(app);

//Connect to Database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.listen(PORT, () => {
  console.log(`Workout Tracker is running on port ${PORT}!`);
});
