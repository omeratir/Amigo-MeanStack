const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
const userRoutes = require("./routes/user");
const citiesRoutes = require("./routes/cities");

const app = express();

const io = require("socket.io");

// Pass - omer1234

mongoose
  .connect(
    "mongodb+srv://omeratir:" + process.env.MONGO_ATLAS_PW +"@amigoposts-csxft.mongodb.net/node-angular?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database *Success!!!!");
  })
  .catch(() => {
    console.log("Connection to database *Failed!!!!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cities", citiesRoutes);

module.exports = app;
