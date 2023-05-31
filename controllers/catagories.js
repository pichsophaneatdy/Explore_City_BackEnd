// Categories of Cost of Living

const axios = require("axios");
const categories = async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://cost-of-living-and-prices.p.rapidapi.com/prices',
        params: {
            city_name: "tokyo",
            country_name: "japan"
        },
        headers: {
            'X-RapidAPI-Key': '42cd9ad7a7msh9bc24d2d7497665p1d2b89jsn70b79866ee1a',
            'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
    };
    const fetchCostOfLiving = async () => {
        try {
            const response = await axios.request(options);
            return response.data;
        } catch(error) {
            console.log(error);
        }
        
    }
    const {prices}= await fetchCostOfLiving();
    // To store unique categories
    const categories = {};
    const uniqueCategories = []
    // Get unique categories
    prices.forEach((good) => {
        const id = good.category_id;
        const name = good.category_name;
        if(!categories[id]) {
            const newCategory = {id: id, name: name};
            categories[id] = name;
            uniqueCategories.push(newCategory);
        }
    })
    res.json(uniqueCategories);
}

module.exports = categories;