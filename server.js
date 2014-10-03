'use strict';

/**
* Module dependencies
*/
var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var passport = require('passport');

/*
* Main application entry file.
* Please note that the order of loading is important
*/

// load configurations
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// system variables
var config = require('./lib/config/config');
var mongoose = require('mongoose');

// Bootstrap db connection
mongoose.connect(config.db);

// Bootstrap models
var modelsPath = './lib/models';
var walkModels = function(path) {
  fs.readdirSync(path).forEach(function(file) {
    var newPath = path + '/' + file;
    var stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(newPath);
      }
    }
    else if (stat.isDirectory()) {
      walkModels(newPath);
    }
  });
};
walkModels(modelsPath);

require('./lib/config/passport')(passport);

var app = express();

require('./lib/config/express')(app, passport);
require('./lib/config/routes')(app);

app.listen(config.port);
console.log('Express server listening on port ' + config.port);

module.exports = app;
