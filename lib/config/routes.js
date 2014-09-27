'use strict';

module.exports = function(app) {
  require('../routes/api/user')(app);
  require('../routes/api/show')(app);

  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

  app.use(function(err, req, res) {
    console.error(err.stack);
    res.send(500, { message: err });
  });
};
