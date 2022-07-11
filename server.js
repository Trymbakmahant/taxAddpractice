const express = require("express");
const createtasklist = require("./routes/createtasklist");
const createtask = require("./routes/createtask");
const tasklist = require("./routes/tasklist");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 5000; // default port for
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/createtasklist", createtasklist);
app.use("/createtask", createtask);
app.use("/tasklist", tasklist);

mongoose.connect(
  "mongodb+srv://TaxAdda:0kjfFe5OgjKp48fP@cluster0.ms82f.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.once("open", () => {
  console.log("mongodb database connnectino establish succcessfully");
});

app.listen(port, () => {
  console.log(`server is running in the port : ${port}`);
});
