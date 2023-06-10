// Categories of Cost of Living
const axios = require("axios");

const fetchData = async () => {
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
    }
    try {
        const response = await axios.request(options);
        return response.data.prices;
    } catch(error) {
        console.log(error);
    }
}
const getCategories = async (req, res) => {
    const prices = await fetchData();
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
const getItems = async (req,res) => {
    // Fetch all goods price
    const response = await fetchData();
    // Get the category id
    const categoryId = Number(req.params.categoryId);
    // Filter to return only the goods in the category
    const result = response.filter((item) => {
        return item.category_id === categoryId;
    })
    res.json(result);
}
module.exports = {getCategories, getItems};