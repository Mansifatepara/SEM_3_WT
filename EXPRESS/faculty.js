const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
    name : String,
    email : String,
    id : Number
    }
);

module.exports = mongoose.model("faculty",schema,"faculties");