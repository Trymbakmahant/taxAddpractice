const mongoose = require("mongoose");

const CreateTaskSchema = new mongoose.Schema({
  taskname: { type: String, required: true },
  description: { type: String, required: true },
  duedate: { type: String, required: true },
  period: { type: String, required: true },
  periodtype: { type: String, required: true },
  tasklistId: { type: String, required: true },
});

const CreateTask = mongoose.model("CreateTask", CreateTaskSchema);
module.exports = CreateTask;
