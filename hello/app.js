'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.get('/info', function(req, res) {
    var id = req.query.id;
    res.setHeader('Content-type', 'application/json');
    res.json({ id: id});
});

app.post('/postinfo', function(req, res) {
    const body = req.body.Body;
    res.setHeader('content-type', 'text/plain');
    res.send('Hai inviato: ' + body);
});

app.listen(3000, function(err) {
    if (err) {
        throw err;
    }

    console.log('Server avviato sulla porta 3000');
});
