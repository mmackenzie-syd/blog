
const mongoose = require('mongoose');
const articleSchema = mongoose.Schema({
    fulltxt: String
});
const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
