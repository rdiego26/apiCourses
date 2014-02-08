/**
 * Created by Diego Ramos on 06/02/14.
 */

//Modules dependencies
var express  = require('express'),
    http = require('http');

var _ = require('underscore');


var constants = require('./utils/constants');
var connection = require('./utils/connection');
var coursesController = require('./controllers/courses');

var _result = {status:{}, date:new Date(), data:[]};


/* App Configuration */
var app = express();
app.set('port', constants.server.port);
app.set('title', 'apiCourses');
app.set('apiPath', '/apiCourses/');

/* Include CORS and JSON on ALL res's  */
app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    res.header('Content-type', constants.header.json);
    next();
});


//JSON API
//Routes - START

//List courses
app.get( app.get('apiPath') + 'list', function(req, res) {
//app.get( app.get('apiPath'), function(req, res){
    coursesController.getData(req, res, coursesController.setData);
});

//Filtering courses for the duration of years
app.get( app.get('apiPath') + 'filterByDuration/:years', function(req, res){
    coursesController.getData( req, res, coursesController.setData );
});

//DEFAULT ROUTE
app.get( '*' , function(req, res) {
    res.writeHead(constants.http.notFound);
    _result.status = constants.http.notFound;
    res.end(JSON.stringify(_result));
});
//Routes - END

http.createServer(app).listen(app.get('port'), function () {
    console.log( app.get('title') + ' listening on port ' + app.get('port'));
});