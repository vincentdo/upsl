var gzippo = require('gzippo');
var express = require('express');
var path = require('path');
var routes = require('./routes/routes.js');
var app = express();

app.use(express.bodyParser());
app.use(express.logger("default"));
app.use(express.cookieParser());

app.post('/addPlayer', routes.add_player);
 
// app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 9000);