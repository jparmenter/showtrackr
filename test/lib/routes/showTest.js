'use strict';
var request = require('supertest');
var app = require('../../../server');
var mongoose = require('mongoose');
var Show = mongoose.model('Show');
var should = require('should');

var show;
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
    var show2;
    before(function(done) {
      show2 = new Show({
        _id: 2,
        name: 'AA series',
        airsDayOfWeek: 'Monday',
        airsTime: '0:00 PM',
        firstAired: '2000-01-01T00:00:00.000Z',
        genre: ['Tool', 'Bar'],
        network: 'XYZ',
        overview: 'A series on TV',
        rating: 10.0,
        ratingCount: 100,
        status: 'Ended',
        poster: 'someposter'
      });
      show2.save(done);
    });

    it('GET - should retrieve shows', function(done) {
      request(app)
        .get('/api/shows/')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.body.length.should.equal(2);
          done();
        });
    });


    describe('By Genre', function() {
      it('GET - should retrieve a shows by genre Foo', function(done) {
        request(app)
          .get('/api/shows/?genre=Foo')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.length.should.equal(1);
            done();
          });
      });

      it('GET - should retrieve empty with an unkown genre', function(done) {
        request(app)
          .get('/api/shows/?genre=test')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.empty;
            done();
          });
      });
    });

    describe('By Alphabet', function() {
      it('GET - should retrieve a shows by alphabet A', function(done) {
        request(app)
          .get('/api/shows?alphabet=A')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.length.should.equal(1);
            done();
          });
      });

      it('GET - should retrieve no shows by alphabet Z', function(done) {
        request(app)
          .get('/api/shows/?alphabet=Z')
          .set('Accept', 'application/json')
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);
            res.body.should.be.empty;
            done();
          });
      });
    });
  });

  describe('/api/shows:id', function() {
    it('GET - should retrieve show information', function(done) {
      request(app)
        .get('/api/shows/' + show._id)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.be.ok;
          done();
        });
    });

    it('GET - should have an empty response with unkown id', function(done) {
      request(app)
        .get('/api/shows/1234')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.be.empty;
          done();
        });
    });
  });

  after(function(done) {
    Show.remove().exec();
    done();
  });
});
