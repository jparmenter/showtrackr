(function() {
  function Show($resource) {
    var Show = {};
    Show.query = function() {
      return $resource('/api/shows/:_id');
    };
    return Show;
  }

  Show.$inject = ['$resource'];
  angular
    .module('showtrackr')
    .factory('Show', Show);
})();
