'use strict';
var request = require('supertest');
var app = require('../../../server');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var should = require('should');

var user;
describe('Show Routes', function() {

  before(function(done) {
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
        .send({ email: user.email, password: user.password })
        .end(function(err) {
          should.not.exist(err);
          User.count().should.equal(1);
          done();
        });
    });
  });

  after(function(done) {
    User.remove().exec();
    done();
  });
});
