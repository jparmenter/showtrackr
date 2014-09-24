'use strict';
var request = require('supertest');
var app = require('../../../server');
var mongoose = require('mongoose');
var Show = mongoose.model('Show');
var _ = require('lodash');

var show, req;
describe('Show Routes', function() {

  before(function(done) {
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

  describe('/api/shows', function() {
    it('GET - should retrieve show information', function(done) {
      req = request(app)
              .get('/api/shows/' + show._id)
              .set('Accept', 'application/json')
              .expect(200)
              .expect(function(res) {
                return _.isEmpty(res.body);
              })
              .end(function(err) {
                if (err) {
                  return done(err);
                }
                done();
              });
    });

    it('GET - should have an empty response with unkown id', function(done) {
      req = request(app)
              .get('/api/shows/1234')
              .set('Accept', 'application/json')
              .expect(200)
              .expect(function(res) {
                return !_.isEmpty(res.body);
              })
              .end(function(err) {
                if (err) {
                  return done(err);
                }
                done();
              });
    });
  });

  after(function(done) {
    Show.remove().exec();
    done();
  });
});
