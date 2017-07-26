
var express = require('express');
var path = require('path');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.set('view options', { layout: false });

app.get('/', function(req, res) {
    res.render('index');
});


app.listen(3000);
console.log('3000 is the magic port');