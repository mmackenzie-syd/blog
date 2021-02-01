const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { ApolloServer, AuthenticationError } = require("apollo-server");
require("dotenv").config();

/* Mongoose connection */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('database connected');
});

/* Expressjs */
const generateToken = require("./authentication/generateToken");
const app = express();

app.use(cors());
app.use(bodyParser.json()); // gives req.body

app.use('/blog', blog);

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

app.get('/', (req, res) => {
    res.send('blog api')
})

app.listen(3000, function () {
    console.log('Listening on port 3000')
});
