'use strict';
var request = require('supertest');
var app = require('../../../server');
var mongoose = require('mongoose');
var User = mongoose.model('User');
// var should =
require('should');

var user;
describe('Show Routes', function() {

  before(function(done) {
    user = new User({
      email: 'default@gmail.com',
      password: 'password'
    });
    done();
  });

  describe('/api/signup', function() {
    it('POST - create a user', function(done) {
      request(app)
        .post('/api/signup')
        .send({ email: user.email, password: user.password })
        .expect(200)
        .end(function() {
          User.find({}, function(err, users) {
            users.should.have.length(1);
          });
          done();
        });
    });

    it('POST - should not create a user that already exists', function(done) {
      user.save();
      request(app)
        .post('/api/signup')
        .send({ email: user.email, password: user.password })
        .expect(500)
        .end(function() {
          done();
        });
    });
  });

  after(function(done) {
    User.remove().exec();
    done();
  });
});
