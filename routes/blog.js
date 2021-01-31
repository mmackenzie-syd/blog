const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');

const Article = require('../models/Article.js');
const Abstract = require('../models/Abstract.js');

const { data } = require('../seedData/Data');
const { articlesSeed, abstractsSeed } = require('../utilities/buildSeedData')(data);


// Seed Database with default data

router.get('/seed', asyncHandler(async (req, res, next) => {
    // remove existing data
    await Article.remove({});
    await Abstract.remove({});
    //
    const createdArticles = await Article.insertMany(articlesSeed);
    for (let i = 0; i < createdArticles.length; i++) {
        const createdArticle = createdArticles[i];
        const { title, filter, day, subtxt, sortIndex } = abstractsSeed[i];
        // because async works in a for loop
        const createdAbstract = new Abstract({
            title,
            filter,
            day,
            sortIndex,
            subtxt,
            articleId: createdArticle._id
        });
        await createdAbstract.save( function(err, abstract){ //  // the new article is returned from save if no error
            if (err) {
                console.log(err);
                return next();
            }
        });
    }
    res.send('blog successfully seeded with data');
    console.log('createdArticles', createdArticles);
}));

// Create Blog
router.post('/', function(req, res) {

});

// Edit Blog
router.put('/:_id', function(req, res){

});

// Delete Blog
router.delete('/:_id', function(req, res){

});

// Get Abstracts
router.get('/abstracts', function(req, res, next) {
    Abstract.find().sort({sortIdx: -1}).exec(function (err, abstracts) {
        if(err){
            next();
            return console.log(err);
        }
        res.json({ abstracts });
    });
});


// Get Article
router.get('/article/:id', function(req, res, next) {
    const id = req.params.id;
    Article.findOne({ _id: id }, function(err, article){
        if(err){
            return next();
        } else {
            res.json({ article });
        }
    });
});

module.exports = router; // don't forget to return it
