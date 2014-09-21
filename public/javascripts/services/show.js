(function() {
  function Show($resource) {
      return $resource('/api/shows/:_id');
  };

  Show.$inject = ['$resource'];
  angular
    .module('showtrackr')
    .factory('Show', Show);
})();
