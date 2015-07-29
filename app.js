var express = require('express');
var app = express();

var routes = require('./routes.js');
routes.init(app);

var server = app.listen(3000);