const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    city: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require:true,
    },
    lat: {
        type: Number,
        require: true,
    },
    lng: {
        type: Number,
        require: true
    },
    nickname: {
        type: String,
        require: true,
        min: 3
    },
    location: {
        type: String,
        require: true,
        min: 3
    },
    rating: {
        type: Number,
    },
    comment: {
        type: String,
        require: true,
        min: 10
    }
})

module.exports = mongoose.model("Comment", CommentSchema);