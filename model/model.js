const mongoose = require ('mongoose');
const { Schema } = mongoose;

const botAnswer = new Schema ({
    quest: String,
    answer: String,
});

const Model = mongoose.model ('db', botAnswer)
module.exports = Model;
