const express = require("express");
const router = express.Router();
const {createComment, getComments} = require("../controllers/comment.js");

router.route("/").put(createComment);
router.route("/:lat/:lng").get(getComments);

module.exports = router;