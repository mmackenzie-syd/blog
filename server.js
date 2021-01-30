const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blog = require('./routes/blog');
require("dotenv").config();

const authenticateToken = require("./Authentication/authenticateToken");
const generateToken = require("./Authentication/generateToken");

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

// protected routes
// app.get('/api', authenticateToken, (req, res) => {
//     console.log('authen')
// })

app.listen(3000, function () {
    console.log('Listening on port 3000')
});
