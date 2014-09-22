'use strict';

var _ = require('lodash');

module.exports = _.merge(
  require('./env/' + process.env.NODE_ENV) || {}
);
