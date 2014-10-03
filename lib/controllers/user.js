'use strict';

var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.signup = function(req, res, next) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });
  user.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send(200);
  });
};

exports.login = function(req, res) {
  res.send(req.user);
};

exports.logout = function(req, res) {
  req.logout();
  res.send(200);
};
