'use strict';

process.env.NODE_ENV = 'test';
var config = require('../../lib/config/config');
var mongoose = require('mongoose');

beforeEach(function(done) {
  function clearDb() {
    for (var i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function() {});
    }
    return done();
  };

  if (mongoose.connection.readyState === 0) {
    mongoose.connect(config.db, function(err) {
      if (err) {
        throw err;
      }
      return clearDb();
    });
  }
  else {
    return clearDb();
  }
});

afterEach(function(done) {
  mongoose.disconnect();
  return done();
});
