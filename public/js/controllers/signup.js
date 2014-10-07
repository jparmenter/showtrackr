'use strict';

(function() {
  function SignupCtrl(Auth) {
    var vm = this;
    vm.signup = function() {
      Auth.signup({
        email: vm.email,
        password: vm.password
      });
    };
  }

  SignupCtrl.$inject = ['Auth'];

  angular
    .module('showtrackr')
    .controller('SignupCtrl', SignupCtrl);
})();
