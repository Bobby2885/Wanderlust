const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    comment: {
        type: String,
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },

});


const Review = mongoose.model("Review", reviewsSchema);
module.exports = Review;
