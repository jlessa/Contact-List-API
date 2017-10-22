var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');

var app = express();
var db;
if (process.env.ENV == 'Test') {
    db = mongoose.connect('mongodb://localhost/ContactApp_test', {
        useMongoClient: true
    });
} else {
    db = mongoose.connect('mongodb://localhost/ContactApp', {
        useMongoClient: true
    });
}

var Contact = require('./models/contactModel');

var port = process.env.PORT || 3000;

var contactRouter = require('./routes/contactRoutes')(Contact);

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use('/api/contacts', contactRouter);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, function () {
    console.log("Server running on " + port);
});

module.exports = app;