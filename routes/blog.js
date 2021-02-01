const express = require('express');
const router = express.Router();
const calculateSortIndex = require("../utilities/calculateSortIndex");
const Article = require('../models/Article.js');
const Abstract = require('../models/Abstract.js');
const authenticateToken = require("../authentication/authenticateToken");

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

module.exports = router;
