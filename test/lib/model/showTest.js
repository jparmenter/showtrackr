'use strict';

require('../utils');
var should = require('should');
var Show = require('../../../lib/models/show');

describe('Show', function() {
  describe('#create()', function() {
    it('should create a new show', function(done) {
      var show = {
        _id: 1,
        name: 'TV series',
        airsDayOfWeek: 'Monday',
        airsTime: '0:00 PM',
        firstAired: '2000-01-01T00:00:00.000Z',
        genre: ['Foo', 'Bar'],
        network: 'XYZ',
        overview: 'A series on TV',
        rating: 10.0,
        ratingCount: 100,
        status: 'Ended',
        poster: 'someposter'
      };
      Show.create(show, function(err, createdShow) {
        should.not.exist(err);
        createdShow._id.should.equal(1);
        createdShow.name.should.equal('TV series');
        createdShow.airsDayOfWeek.should.equal('Monday');
        done();
      });
    });
  });
});
