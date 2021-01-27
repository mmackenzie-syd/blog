const express = require('express');
const cors = require('cors');
const { abstracts } = require('./seedData/Abstracts');
const { articles } = require('./seedData/Articles');

const app = express();

app.use(cors());

app.get('/article/:id', function (req, res, next) {
    const id = req.params.id;

    const article = articles.find(article => article.id === id);

    res.json({ article });
});

app.get('/abstracts', function (req, res, next) {
    res.json({ abstracts });
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});
