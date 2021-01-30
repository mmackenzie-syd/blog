const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require("dotenv").config();

const authenticateToken = require("./Authentication/authenticateToken");
const generateToken = require("./Authentication/generateToken");

const { abstracts } = require('./seedData/Abstracts');
const { articles } = require('./seedData/Articles');

const app = express();

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
    const user = req.body.username;
    const password = req.body.password;

    if (user !== process.env.APP_USER) {
        next('user not found');
        return;
    }
    if (password !== process.env.PASSWORD) {
        next('incorrect password');
        return
    }
    const token = generateToken(user);
    res.status(200).json({ user, token });
});

// protected routes
app.get('/api', authenticateToken, (req, res) => {
    console.log('authen')
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});
