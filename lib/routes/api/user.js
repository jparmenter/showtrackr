'use strict';

var user = require('../../controllers/user');

module.exports = function(app) {

  app.post('/api/signup', user.signup);
};
