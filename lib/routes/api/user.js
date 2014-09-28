'use strict';

var user = require('../../controllers/user');
var passport = require('passport');
//var authorization = require('../middlewares/authorization');

module.exports = function(app) {

  app.post('/api/signup', user.signup);
  app.post('/api/login', passport.authenticate('local'), user.login);
  app.get('/api/logout', user.logout);
};
