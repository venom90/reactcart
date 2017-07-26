
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('view options', { layout: false });

app.get('/', function(req, res) {
    res.render('index');
});


app.listen(port);
console.log('app running on'+ port);