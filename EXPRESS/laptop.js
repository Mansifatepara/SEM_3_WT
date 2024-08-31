const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
    company : String,
    prize : Number,
    generation : Number,
    touch : String,
    operatingSystem : String
    }
);

module.exports = mongoose.model("laptop",schema,"laptops");