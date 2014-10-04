'use strict';

module.exports = function(app) {
  app.use(function(req, res, next) {
    if (req.user) {
      res.cookie('user', JSON.stringify(req.user));
    }
    next();
  });

  require('../routes/api/user')(app);
  require('../routes/api/show')(app);
  require('../routes/api/subscribe')(app);

  app.get('*', function(req, res) {
    res.redirect('/#' + req.originalUrl);
  });

  app.use(function(err, req, res) {
    console.error(err.stack);
    res.send(500, { message: err });
  });
};
