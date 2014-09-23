'use strict';
(function() {
  function Subscription($http) {
    return {
      subscribe: function(show) {
        return $http.post('/api/subscribe', { showId: show._id });
      },
      unsubscribe: function(show) {
        return $http.post('/api/unsubscribe', { showId: show._id });
      }
    };
  }

  Subscription.$inject = ['$http'];
  angular
    .module('showtrackr')
    .factory('Subscription', Subscription);
})();
