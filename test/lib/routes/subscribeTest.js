'use strict';

var app = require('../../../server');
var should = require('should');
var supertest = require('supertest');
var mongoose = require('mongoose');
var Show = mongoose.model('Show');
var request = supertest(app);
var show;

describe('Subscribe Routes', function() {
  before(function(done) {
    Show.remove().exec();
    show = new Show({
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
    });

    show.save(done);
  });

  describe('GET /api/subscribe', function() {
    it('should return 401 when not authenticated', function(done) {
      request
        .post('/api/subscribe')
        .send({ showId: show._id })
        .expect(401)
        .end(function(err) {
          should.not.exist(err);
          done();
        });
    });
  });
  describe('GET /api/unsubscribe', function() {
    it('should return 401 when not authenticated', function(done) {
      request
        .post('/api/unsubscribe')
        .send({ showId: show._id })
        .expect(401)
        .end(function(err) {
          should.not.exist(err);
          done();
        });
    });
  });
});
