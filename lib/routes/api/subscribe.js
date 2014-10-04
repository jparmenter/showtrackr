'use strict';

var show = require('../../controllers/subscribe');
var auth = require('../../middlewares/authorization');

module.exports = function(app) {
    app.post('/api/subscribe', auth.requiresLoginAPI, show.create);
    app.post('/api/unsubscribe', auth.requiresLoginAPI, show.destroy);
};
