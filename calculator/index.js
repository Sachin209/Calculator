const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extend: true }));

app.listen(3000, function () {
  console.log("server start on port 3000");
});

app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"));

app.post("/", function (req, res) {
  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);
  var result = num1 + num2;
  res.send("Your answer is = " + result);
});
