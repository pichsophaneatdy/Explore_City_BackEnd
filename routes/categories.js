const express = require("express");
const router = express.Router();
const {getCategories, getItems} = require("../controllers/catagories");

router.route("/").get(getCategories);
router.route("/:categoryId").get(getItems);
module.exports = router;