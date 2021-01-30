
const build = function(data) {
    const articles = [];
    const abstracts = [];
    for (let i = 0; i < data.length; i++) {
        const { title, filter, day, subtxt, fulltxt } = data[i];
        const abstract = { title, filter, day, subtxt, articleId: i };
        const article = { fulltxt, id: i };
        abstracts.push(abstract);
        articles.push(article);
    }
    return {
        articles,
        abstracts
    }
}

module.exports = build;
