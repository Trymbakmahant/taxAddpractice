const router = require("express").Router();
const Task = require("../models/createtask");

router.route("/").post((req, res) => {
  console.log(req.body);
  const taskname = req.body.taskname;
  const description = req.body.description;
  const period = req.body.period;
  const periodtype = req.body.periodtype;
  const tasklistId = req.body.tasklistId;

  const mlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const arr = period.split("-");
  // this below code for converting indian time to ISO time format
  var dateobj = new Date(` ${mlist[arr[0] % 13]} ${arr[1]} , ${arr[2]} `);
  
  var duedate = new Date(dateobj);

  if (periodtype == "yearly") {
    duedate = new Date(dateobj.setFullYear(dateobj.getFullYear() + 1));
  } else if (periodtype == "monthly") {
    duedate = new Date(dateobj.setMonth(dateobj.getMonth() + 1));
  }
 
  const newTask = new Task({
    taskname,
    description,
    duedate,
    period,
    periodtype,
    tasklistId,
  });
  newTask
    .save()
    .then(() => res.json("Task is added"))
    .catch((err) => res.json(err));
});

module.exports = router;
