var mongoose = require('mongoose');

var studentSchema = mongoose.Schema({
  name: {
    first: String,
    last: String
  },
  adress: {
    streetAdress: String,
    city: String,
    state: String,
    postalcode: Number
  },

  phonenumber: String,
  age: Number,
  gender: String,
  course: String

});

module.exports = mongoose.model('Student', studentSchema);
