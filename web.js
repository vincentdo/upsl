var gzippo = require('gzippo');
var express = require('express');
var path = require('path');
var app = express();

 
// app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 9000);