const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/article/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
});

app.get('/abstracts', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'});
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
});
