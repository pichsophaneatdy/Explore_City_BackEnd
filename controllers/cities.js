const axios = require("axios");

// Get 6 Random Cities
const getRandomCities = (req, res) => {
    res.send("Here are the cities");
}

module.exports = getRandomCities;