const router = require("express").Router();
const TaskList = require("../models/tasklist");
const Task = require("../models/createtask");

router.route("/").get(async (req, res) => {
  try {
    const listofTask = await Task.find();

    return res.json(listofTask);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});
router.route("/search").get(async (req, res) => {
  try {
    const posts = await TaskList.findOne({
      name: req.body.searchtext,
    });

    return res.json(posts);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
