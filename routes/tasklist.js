const router = require("express").Router();
const TaskList = require("../models/tasklist");
const Task = require("../models/createtask");

router.route("/").get((req, res) => {
  const { taskname, description, periodtype, period, duedate, tasklistname } =
    req.body;
});

module.exports = router;
