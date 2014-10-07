'use strict';

(function() {
  function LoginCtrl(Auth) {
    var vm = this;
    vm.login = function() {
      Auth.login({
        email: vm.email,
        password: vm.password
      });
    };
  }

  LoginCtrl.$inject = ['Auth'];
  angular
    .module('showtrackr')
    .controller('LoginCtrl', LoginCtrl);
})();
