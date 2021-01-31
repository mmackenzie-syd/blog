const mongoose = require('mongoose');
const abstractSchema = mongoose.Schema({
    title: { type: String, unique: true},  // title must be unique.
    filter: String,  // contains month and year
    day: String,
    sortIdx: Number, // index for sorting abstracts into chronological order. It is approximately the number of days since 2014.
    subtxt: String,
    articleId: mongoose.Schema.Types.ObjectId
});
const Abstract = mongoose.model('Abstract', abstractSchema);
module.exports = Abstract;
