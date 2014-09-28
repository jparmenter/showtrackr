'use strict';

exports.requiresLoginAPI = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.send(401);
  }
  next();
};
