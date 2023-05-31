const express = require("express")
const router = express.Router();
const getRandomCities = require("../controllers/cities");

router.route("/").get(getRandomCities);

module.exports = router;