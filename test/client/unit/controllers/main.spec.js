'use strict';

(function() {
  describe('MainCtrl', function() {

    beforeEach(module('showtrackr'));

    var MainCtrl,
        scope,
        $httpBackend;

    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
      scope = $rootScope.$new();

      MainCtrl = $controller('MainCtrl',  {
        $scope: scope
      });

      $httpBackend = _$httpBackend_;
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

    it('should have a heading title default as Top 12 Shows', function() {
      expect(scope.headingTitle).toBe('Top 12 Shows');
    });

    it('should have shows', function() {
        var showData = [
        {_id: '1', title: 'TV 1'},
        {_id: '2', title: 'TV 2'}
        ];

      $httpBackend.expectGET(/api\/shows/).respond(showData);

      $httpBackend.flush();
      expect(scope.shows.length).toBe(2);
    });
  });
})();
