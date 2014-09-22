(function() {
  function AddCtrl($scope, $alert, Show) {
    var vm = this;
    vm.addShow = function() {
      Show.save({ showName: vm.showName },
      function() {
        vm.showName = '';
        $scope.addForm.$setPristine();
        $alert({
          content: 'TV show has been added.',
          placement: 'top-right',
          type: 'success',
          duration: 3
        });
      },
      function(response) {
        vm.showName = '';
        $scope.addForm.$setPristine();
        $alert({
          content: response.data.message,
          placement: 'top-right',
          type: 'danger',
          duration: 3
        });
      });
    };
  };

  AddCtrl.$inject = ['$scope', '$alert', 'Show'];
  angular
    .module('showtrackr')
    .controller('AddCtrl', AddCtrl);
})();
