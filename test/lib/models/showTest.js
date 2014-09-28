'use strict';
var should = require('should');
var mongoose = require('mongoose');
var Show = mongoose.model('Show');

var show1, show2;
describe('Show Model', function() {

  before(function(done) {
    Show.remove().exec();
    show1 = new Show({
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

    show2 = new Show({
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

    done();
  });

  describe('Method Save', function() {
    it('should begin with no shows', function(done) {
      Show.find({}, function(err, shows) {
        shows.should.have.length(0);
        done();
      });
    });

    it('should create a new show', function(done) {
      show1.save(done);
    });

    it('should fail when adding an existing show', function(done) {
      show1.save();
      return show2.save(function(err) {
        should.exist(err);
        done();
      });
    });
  });
});
