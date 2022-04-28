var express = require("express");
var app = express();

console.log("Hello World");

// app.get("/", function (req, res) {
//   res.send("Hello Express");
// });

const absolutePath = __dirname + "/views/index.html";
const publicPath = __dirname + "/public";
app.use("/public", express.static(publicPath));

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

module.exports = app;
