console.log(process.env.MONGODB_URI);
//Dependencies//
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

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
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: true,
// });

const MongoClient = require("mongodb").MongoClient;
const uri = process.env.MONGODB_URI || "mongodb://localhost/workout";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(PORT, () => {
  console.log(`Workout Tracker is running on port ${PORT}!`);
});
