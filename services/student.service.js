
var User = require('../models/user.model');
module.exports = {
  saveAllUsers: saveAllUsers,
  fetchAllUsers: fetchAllUsers,
  fetchUserPhoneNumber: fetchUserPhoneNumber,
  fetchUserName: fetchUserName
};

function saveAllUsers(userToInsert) {

  return User.insertMany(userToInsert).then(function (allUsers) {
    console.log('All users added to database: \n' + allUsers);

  }).catch(function (err) {
    console.log('There was an eror inserting users.' + err);
  });
}

function fetchAllUsers() {
  return User.find({}).exec();
}

function fetchUserPhoneNumber() {
  var numbers = [];
  return User.find({}).exec().then(function (result) {
    result.forEach(function (element) {
      numbers.push(element.phonenumber);
    });

    console.log(numbers);
    return numbers;
  }).catch(function (err) {
    console.log(err);
  });
}

function fetchUserName() {
  var nameUsers = [];
  return User.find({}).exec().then(function (result) {
    result.forEach(function (element) {
      nameUsers.push(element.name);
    });

    console.log(nameUsers);
    return nameUsers;
  }).catch(function (err) {
    console.log(err);
  });
}
