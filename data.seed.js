var studentService = require('./services/student.service');
var messageService = require('./services/message.services');
var collegeStudents = require('./utils/user');
var mesg = require('./utils/messages');

module.exports = {
  studentSeed:  studentSeed,
  messageSeed: messageSeed
};

function studentSeed() {

  studentService.saveAllUsers(collegeStudents).then(function (usersSaved) {
          console.log('seeding of student database with users is complete.');
        }).catch(function (err) {
          console.log('Error in seeding of students database: ' + err);
        });
}

function messageSeed() {
  messageService.saveAllMessage(mesg).then(function (messageSaved) {
    console.log('Seeding of messagetemp database with feeclerance is complete.');

  }).catch(function (err) {
    console.log('Error in seeding of messagetem database: '  + err);

  });
}
