
var expect = require('chai').expect;
var Message = require('../models/message.model');
var User = require('../models/user');

describe('Database testing for Message Schema', function () {
  it('should be invalid if no message body', function () {
      var newMessage = new Message();
      newMessage.validate(function (err) {
        expect(err.errors).to.exist;
        done();
      });
    });
});

describe('Database testing for Users Schema', function () {
  it('should not allow duplicate username in Users Schema', function () {
    var newUser = new User({
      username:  "as",
      password: "***"
    });
    newUser.validate(function (err) {
      expect(err).to.exist;
      done();
    });
  });
});
