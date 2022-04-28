var express = require("express");
var app = express();
require("dotenv").config();

console.log("Hello World");
// console.log(process.env.MESSAGE_STYLE);
// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

const absolutePath = __dirname + "/views/index.html";
const publicPath = __dirname + "/public";

app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use("/public", express.static(publicPath));

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get(
  "/now",
  function (req, res, next) {
    req.time = new Date().toString();
    next();
  },
  function (req, res) {
    res.json({ time: req.time });
  }
);

app.get("/:word/echo", function (req, res) {
  res.json({ echo: req.params.word });
});

app.get("/name", function (req, res) {
  res.json({ name: req.query.firstname + " " + req.query.lastname });
});

module.exports = app;
