'use strict';

var show = require('../../controllers/show');

module.exports = function(app) {

  app.get('/api/shows', show.index);
  app.post('api/shows', show.create);
  app.get('/api/shows/:id', show.get);
};
