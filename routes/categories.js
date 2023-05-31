const express = require("express");
const router = express.Router();
const categories = require("../controllers/catagories");

router.route("/").get(categories);

module.exports = router;