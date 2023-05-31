const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

// Import Routes
const CitiesRoute = require("./routes/cities");
const CountriesRoute = require("./routes/countries");
const CategoriesRoute = require("./routes/categories");
// Middlewares
app.use(express.json());
app.use(cors());
// Routes
app.get("/", (req,res) => {
    res.send("Welcome to Explore+City. API");
})
app.use("/api/cities", CitiesRoute);
app.use("/api/countries", CountriesRoute);
app.use("/api/categories", CategoriesRoute);
// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})