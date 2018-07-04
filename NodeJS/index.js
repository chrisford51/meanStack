const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db.js");
var employeeController = require("./controllers/employeeController.js");

var app = express();
app.use(bodyParser.json());

app.listen(5500, () => console.log("Server Started on Port 5500"));

app.use("/employees", employeeController);
