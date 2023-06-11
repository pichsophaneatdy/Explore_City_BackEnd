const Comment = require("../Model/CommentModel");

// Create a new comment
const createComment = async (req, res) => {
    const {city, country, lat, lng, rating, nickname, location, comment} = req.body;
    if (!city || !country || !lat || !lng || !nickname || !location || !comment) {
        return res.status(400).json({message: "Please provide all the required fields"});
    }
    try {
        const newComment = await Comment.create(req.body);
        res.status(201).json({message: "Successfully uploaded the comment", comment: newComment});
    } catch(error) {
        res.status(422).json({message: "Unable to create the comment", error: error});
    }
}
const getComments = async (req, res) => {
    const {lat, lng} = req.params;
    if (!lat || !lng) {
        return res.status(400).json({message: "Missing latitufe or longtitude"});
    }
    try {
        const Comments = await Comment.find({lat: Number(lat), lng: Number(lng)});
        if (Comments.length === 0) {
            return res.json([]);
        }
        res.status(200).json(Comments);
    } catch(error) {
        res.status(404).json({message: "Unable to retrieve the comments", error: error});
    }
    
}
module.exports = {createComment, getComments};