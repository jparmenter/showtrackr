'use strict';

var mongoose = require('mongoose');
var Show = mongoose.model('Show');

exports.create = function(req, res, next) {
  Show.findById(req.body.showId, function(err, show) {
    if (err) {
      return next(err);
    }
    show.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send(200);
    });
  });
};

exports.destroy = function(req, res, next) {
  Show.findById(req.body.showId, function(err, show) {
    if (err) {
      return next(err);
    }
    var index = show.subscribers.indexOf(req.user.id);
    show.subscribers.splice(index, 1);
    show.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send(200);
    });
  });
};
