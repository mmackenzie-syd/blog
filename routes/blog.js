const express = require('express');
const router = express.Router();

const { data } = require('../seedData/Data');

const { articles, abstracts } = require('../seedData/Build')(data);

// Create Blog
router.post('/', function(req, res) { // blog consists of an article and an abstract and a category for filtering

});

// Edit Blog
router.put('/:_id', function(req, res){

});

// Delete Blog
router.delete('/:_id', function(req, res){ // the id in the url is the id of the abstract

});

// Get Abstracts
router.get('/abstracts', function(req, res) {
    res.json({ abstracts });
});


// get Articles
router.get('/article/:id', function(req, res) {
    const id = req.params.id;
    const article = articles.find(article => article.id == id);
    res.json({ article });
});

module.exports = router; // don't forget to return it
