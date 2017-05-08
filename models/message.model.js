var mongoose = require('mongoose');
var messageSchema = mongoose.Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('Message', messageSchema);
