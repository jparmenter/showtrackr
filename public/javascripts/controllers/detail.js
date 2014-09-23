'use strict';
(function() {
  function DetailCtrl($rootScope, $routeParams, Show, Subscription) {
    var vm = this;
    Show.get({ _id: $routeParams.id }, function(show) {
      vm.show = show;
      vm.isSubscribed = function() {
        return vm.show.subscribers.indexOf($rootScope.currentUser._id) !== -1;
      };

      vm.subscribe = function() {
        Subscription.subscribe(show).success(function() {
          vm.show.subscribers.push($rootScope.currentUser._id);
        });
      };

      vm.unsubscribe = function() {
        Subscription.unsubscribe(show).success(function() {
          var index = vm.show.subscribers.indexOf($rootScope.currentUser._id);
          vm.show.subscribers.splice(index, 1);
        });
      };

      vm.nextEpisode = show.episodes.filter(function(episode) {
        return new Date(episode.firstAired) > new Date();
      })[0];
    });
  }

  DetailCtrl.$inject = ['$rootScope', '$routeParams', 'Show', 'Subscription'];
  angular
    .module('showtrackr')
    .controller('DetailCtrl', DetailCtrl);
})();
