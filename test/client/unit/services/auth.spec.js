'use strict';

(function() {
  describe('Auth Service', function() {
    var httpBackend, locationMock, rootScope, cookieStore, alert;

    beforeEach(inject(function ($httpBackend, _$location_, $rootScope, $cookieStore, $alert) {
      rootScope = $rootScope.$new();
      httpBackend = $httpBackend;
      locationMock = _$location_;
    }))
    // $http, $location, $rootScope, $cookieStore, $alert
  })
})
