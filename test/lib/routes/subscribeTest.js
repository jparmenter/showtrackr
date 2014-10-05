'use strict';

var app = require('../../../server');
var should = require('should');
var supertest = require('supertest');
var mongoose = require('mongoose');
var Show = mongoose.model('Show');
var User = mongoose.model('User');
var request = supertest(app);
var agent = supertest.agent(app);

var show, user;

describe('Subscribe Routes', function() {
  before(function(done) {
    Show.remove().exec();
    User.remove().exec();

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

    show.save();

    user = new User({
      email: 'default@gmail.com',
      password: 'password'
    });
    user.save(done);
  });

  describe('/api/login', function() {
    it('POST - should return a user with correct params', function(done) {
      agent
        .post('/api/login')
        .send({ email: user.email, password: 'password' })
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.body.email.should.exist;
          res.body.password.should.exist;
          done();
        });
    });
  });

  describe('GET /api/subscribe', function() {
    it('should return 200 when authenticated', function(done) {
      agent
        .post('/api/subscribe')
        .send({ showId: show._id })
        .expect(200)
        .end(function(err) {
          should.not.exist(err);
          //show.subscribers.length.should.equal(1);
          done();
        });
    });

    it('should return 401 when unauthenticated', function(done) {
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
    it('should return 200 when authenticated', function(done) {
      agent
        .post('/api/unsubscribe')
        .send({ showId: show._id })
        .expect(200)
        .end(function(err) {
          should.not.exist(err);
          show.subscribers.length.should.equal(0);
          done();
        });
    });

    it('should return 401 when unauthenticated', function(done) {
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
