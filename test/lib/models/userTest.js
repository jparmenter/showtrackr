'use strict';
var should = require('should');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var user1, user2;
describe('User Model', function() {

  before(function(done) {
    User.remove().exec();
    user1 = new User({
      email: 'user@web.com',
      password: 'password'
    });

    user2 = new User({
      email: 'user@web.com',
      password: 'password'
    });

    done();
  });

  describe('Method Save', function() {
    it('should begin with no users', function(done) {
      User.find({}, function(err, users) {
        users.should.have.length(0);
        done();
      });
    });

    it('should create a new user', function(done) {
      user1.save(done);
    });

    it('should fail when adding an existing user', function(done) {
      user1.save();
      return user2.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });

  describe('Method Password Compare', function() {
    it('should return a match with correct password', function(done) {
      user1.save();
      user1.comparePassword('password', function(err, isMatch) {
        isMatch.should.be.true;
        done();
      });
    });

    it('should fail with incorrect password', function(done) {
      user1.save();
      user1.comparePassword('fadew', function(err, isMatch) {
        isMatch.should.be.false;
        done();
      });
    });
  });
});
