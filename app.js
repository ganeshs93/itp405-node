var express = require("express");
var DvdController = require('./controllers/DvdController');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/dvds', DvdController.search);

app.listen(3000, function() {
    console.log('Listening on localhost:3000');
});