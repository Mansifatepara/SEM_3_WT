const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
    rollno : Number,
    name : String,
    eno : Number,
    email : String
    }
);

module.exports = mongoose.model("student",schema,"students");