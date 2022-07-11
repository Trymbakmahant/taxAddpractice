const mongoose = require("mongoose");

const TaskListSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: String, required: true },
});

const Tasklist = mongoose.model("Tasklist", TaskListSchema);
module.exports = Tasklist;
