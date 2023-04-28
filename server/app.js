const express = require("express");
const app = express();
// const morgan = require("morgan");
const volleyball = require("volleyball");
const cors = require("cors");
const path = require("path");

//useful for when we try creating information for out database/application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(volleyball);

app.use("/api", require("./api"));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Good to go");
// });

//this is now /api/blogs or /api/...

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
