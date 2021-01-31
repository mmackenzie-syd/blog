const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const calculateSortIndex = require("../utilities/calculateSortIndex");

const Article = require('../models/Article.js');
const Abstract = require('../models/Abstract.js');
const authenticateToken = require("../authentication/authenticateToken");

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
        await createdAbstract.save();
    }
    res.send('blog successfully seeded with data');
}));

// Create Blog
router.post('/', authenticateToken, asyncHandler(async (req, res) => {
    const { title, filter, day, subtxt, fulltxt, abstractId } = req.body;
    const sortIndex = calculateSortIndex(filter, day);

    // save new article
    const createdArticle = new Article({ fulltxt });
    await createdArticle.save();

    // save new abstract
    const createdAbstract = new Abstract({
        title, filter, day, subtxt, sortIndex,
        articleId: createdArticle._id
    });
    await createdAbstract.save();

    res.send('successful create blog');

}));

// Edit Blog
router.put('/:id', authenticateToken, asyncHandler(async (req, res) => {
    const { title, filter, day, subtxt, fulltxt, abstractId } = req.body;
    const sortIndex = calculateSortIndex(filter, day);

    // delete existing article and abstract
    await Article.deleteOne({ _id: req.params.id });
    await Abstract.deleteOne({ _id: abstractId });

    // save new article
    const createdArticle = new Article({ fulltxt });
    await createdArticle.save();

    // save new abstract
    const createdAbstract = new Abstract({
        title, filter, day, subtxt, sortIndex,
        articleId: createdArticle._id
    });
    await createdAbstract.save();

    res.send('successful edit');
}));

// Delete Blog
router.delete('/:abstractId/:articleId', authenticateToken, asyncHandler(async (req, res) => {
    const { articleId, abstractId } = req.params;
    await Article.deleteOne({ _id: articleId });
    await Abstract.deleteOne({ _id: abstractId });
    res.send('successful delete');
}));

// Get Abstracts
router.get('/abstracts', function(req, res, next) {
    Abstract.find().sort({sortIndex: -1}).exec(function (err, abstracts) {
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
