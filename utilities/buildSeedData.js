const calculateSortIndex = require("./calculateSortIndex");

const buildSeedData = function(data) {
    const articlesSeed = [];
    const abstractsSeed = [];
    for (let i = 0; i < data.length; i++) {
        const { title, filter, day, subtxt, fulltxt } = data[i];
        const sortIndex = calculateSortIndex(filter, day);
        const abstract = { title, filter, day, subtxt, sortIndex, articleId: i };
        const article = { fulltxt, id: i };
        abstractsSeed.push(abstract);
        articlesSeed.push(article);
    }
    return {
        articlesSeed,
        abstractsSeed
    }
}

module.exports = buildSeedData;
