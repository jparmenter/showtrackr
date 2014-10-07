'use strict';

module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    files: [
      'public/bower_components/angular/angular.js',
      'public/bower_components/angular-strap/dist/angular-strap.js',
      'public/bower_components/angular-strap/dist/angular-strap.tpl.js',
      'public/bower_components/angular-messages/angular-messages.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/angular-route/angular-route.js',
      'public/bower_components/angular-cookies/angular-cookies.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      'public/bower_components/moment/moment.js',
      'public/js/app.js',
      'public/js/controllers/*.js',
      'public/js/directives/repeatPassword.js',
      'public/js/filters/fromNow.js',
      'public/js/services/*.js',
      'test/client/unit/**/*.js'
    ],
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
