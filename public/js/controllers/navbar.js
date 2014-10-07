'use strict';

(function() {
  function NavbarCtrl(Auth) {
    var vm = this;
    vm.logout = function() {
      Auth.logout();
    };
  }

  NavbarCtrl.$inject = ['Auth'];

  angular
    .module('showtrackr')
    .controller('NavbarCtrl', NavbarCtrl);
})();
