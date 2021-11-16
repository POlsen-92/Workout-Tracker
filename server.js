const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const { Mongoose } = require("mongoose");
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const Workout = require(".models");
const app = express();

Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workout_tracker";
const collections = ["exercises"];

const db = mongojs(databaseUrl, collections);
db.on("error", error => {
  console.log("Database Error:", error);
});

//ROUTES~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// api/workouts
    //CREATE ROUTES







    // READ ROUTES







    // UPDATE ROUTES








    //DELETE ROUTES





// Listen on port PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });