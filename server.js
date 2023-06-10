const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// Local Imports
const connectDB = require("./Database/connectDB");
// Import Routes
const CitiesRoute = require("./routes/cities");
const CountriesRoute = require("./routes/countries");
const CategoriesRoute = require("./routes/categories");
const CommentRoute = require("./routes/comment");
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
app.use("/api/comment", CommentRoute);
// Start the server
const PORT = 8080;
const startServer = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Connected to DB and Server is running on PORT ${PORT}...`);
        })
    } catch(error) {
        console.log(error)
    }
}
startServer();