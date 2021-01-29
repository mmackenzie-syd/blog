const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { abstracts } = require('./seedData/Abstracts');
const { articles } = require('./seedData/Articles');

const app = express();

const myUsername = 'mark@example.com';
const myPassword = 'elephant';

app.use(cors());
app.use(bodyParser.json()); // gives req.body

app.get('/article/:id', function (req, res, next) {
    const id = req.params.id;

    const article = articles.find(article => article.id === id);

    res.json({ article });
});

app.get('/abstracts', function (req, res, next) {
    res.json({ abstracts });
});

app.post('/login', function (req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    if (username !== myUsername) {
        next('user not found');
    }
    if (password !== myPassword) {
       next('incorrect password');
    }
    res.json({ message: 'successful login' });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(function(err, req, res, next) {
    res.status(404);
    res.send("Oops, something went wrong.")
});

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});
