
var Message = require('../models/message.model'); //capitalize because it's constructor
module.exports = {
  saveAllMessage: saveAllMessage,
  fetchAllMessage: fetchAllMessage,
  fetchMessageBody: fetchMessageBody

};

function saveAllMessage(messageToInsert) {
  return Message.insertMany(messageToInsert).then(function (allmessages) {
    console.log('All messages added to database:\n' + allmessages);
  }).catch(function (err) {
    console.log('There was an error inserting message.' + err);
  });
}

function fetchAllMessage() {
  return Message.find({}).exec();
}

function fetchMessageBody(messageTemplete) {
  var str = messageTemplete.toString();
  var todayDate = new Date();
  var dd = todayDate.getDate();
  var mm = todayDate.getMonth();
  var yyyy = todayDate.getFullYear();
  todayDate = mm + '/' + dd + '/' + yyyy;
  var changeDate = str.replace("[date]", todayDate.toString());
  return changeDate;
}
