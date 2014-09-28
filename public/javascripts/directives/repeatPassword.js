'use strict';

(function() {
  function repeatPassword() {
    return {
      require: 'ngModel',
      link: function(scope, elem, attrs, ctrl) {
        var otherInput = elem.inheritedData('$formController')[attrs.repeatPassword];
        ctrl.$parsers.push(function(value) {
          if (value === otherInput.$viewValue) {
            ctrl.$setValidity('repeat', true);
            return value;
          }
          ctrl.$setValidity('repeat', false);
        });
      }
    };
  }

  angular
    .module('showtrackr')
    .directive('repeatPassword', repeatPassword);
})();
