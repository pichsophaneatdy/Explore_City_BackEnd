const express = require("express")
const router = express.Router();
const getRandomCountries = require("../controllers/countries");

router.route("/").get(getRandomCountries);

module.exports = router;