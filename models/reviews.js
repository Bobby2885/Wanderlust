const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewsSchema = new Schema({
    Comment: {
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


const Reviews = mongoose.model("Reviews", reviewsSchema);
module.exports = Reviews;