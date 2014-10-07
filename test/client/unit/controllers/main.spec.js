'use strict';

(function() {
  describe('MainCtrl', function() {

    beforeEach(module('showtrackr'));

    var scope, MainCtrl;//, Auth;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();

      MainCtrl = $controller('MainCtrl',  {
        $scope: scope
      });
    }));

    it('should have a MainCtrl controller', function() {
      expect(MainCtrl).toBeDefined();
    });
  });
})();
