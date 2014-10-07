'use strict';
(function() {
  function fromNow() {
    return function(date) {
      return moment(date).fromNow();
    };
  }

  angular
    .module('showtrackr')
    .filter('fromNow', fromNow);
})();
