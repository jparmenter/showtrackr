'use strict';
var request = require('supertest');
var app = require('../../../server');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var should = require('should');
var agent = request.agent(app);

var user;
describe('Show Routes', function() {

  before(function(done) {
    User.remove().exec();
    user = new User({
      email: 'default@gmail.com',
      password: 'password'
    });
    user.save(done);
  });

  describe('/api/signup', function() {
    it('POST - create a user', function(done) {
      request(app)
        .post('/api/signup')
        .send({ email: 'newemail@gmail.com', password: 'password' })
        .expect(200)
        .end(function() {
          User.find({}, function(err, users) {
            users.should.have.length(2);
          });
          done();
        });
    });

    it('POST - should not create a user that already exists', function(done) {
      request(app)
        .post('/api/signup')
        .send({ email: user.email, password: user.password } )
        .expect(500)
        .end(function(err) {
          should.not.exist(err);
          done();
        });
    });
  });

  describe('/api/login', function() {

    it('POST - should return a user with correct params', function(done) {
      agent
        .post('/api/login')
        .send({ email: user.email, password: user.password })
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.body.should.exist;
          done();
        });
    });
  });

  describe('/api/logout', function() {
    beforeEach(function(done) {
      user.save();
      agent
        .post('/api/login')
        .send({ email: user.email, password: user.password })
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.headers['set-cookie']);
          done();
        });
    });

    it('GET - should return 200', function(done) {
      agent
        .get('/api/logout')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.headers['set-cookie']);
          done();
        });
    });
  });
});
