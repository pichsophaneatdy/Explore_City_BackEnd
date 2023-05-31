const axios = require("axios");
const countries = require("../data/countries");


// Get 6 Random Countries
const getRandomCountries = (req, res) => {
    const countriesArray = [];
    for (let i = 0; i < 6 ; i++) {
        let randomIndex = Math.floor(Math.random() * countries.length);
        countriesArray.push(countries[randomIndex]);
    }
    res.status(200).json(countriesArray);
}
module.exports = getRandomCountries;