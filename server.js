var modules = {
    http: require('http'),
    express: require('express'),
    path: require('path')
}

var app = modules.express()
app.set('view engine', 'ejs');
app.use(modules.express.urlencoded({ extended: true }));

var configurations = require('./configurations');
var classes = require('./_classes/_classes')(modules, configurations, classes);

var database = require('./_database/_database')(modules, configurations, classes);
var methods = require('./_methods/_methods')(modules, configurations, classes, database);

var context = require('./context')(modules, configurations, classes, methods);

var redirections = require('./_redirections/_redirections')(modules, configurations, classes, app, methods, context);

modules.http.createServer(app).listen(configurations.server.port)