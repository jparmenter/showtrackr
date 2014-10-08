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

    it('should have a alphabet with a length of 27', function() {
      expect(scope.alphabet.length).toBe(27);
    });

    it('should have a genre with a length of 24', function() {
      expect(scope.genres.length).toBe(24);
    });
  });
})();
