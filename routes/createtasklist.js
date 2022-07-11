const router = require("express").Router();
const TaskList = require("../models/tasklist");

router.route("/").post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const active = req.body.active;
  const newTasklist = new TaskList({
    name,
    description,
    active,
  });
  newTasklist
    .save()
    .then(() => res.json("Task List is added"))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
