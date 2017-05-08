var express = require('express');
var router = express.Router();
var messageService = require('../services/message.services');
var studentService = require('../services/student.service');
var Message = require('../models/message.model.js');
var twilio = require('twilio');

var apiKey = process.env.API_KEY_SMS;
var apiSecret = process.env.API_SID_SMS;

var client = require('twilio')(apiKey, apiSecret);

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/users/login');
  }
}

router.get('/', ensureAuthenticated, function (req, res) {
  var indexFetch = {
    message: [],
    student: []
  };
  studentService.fetchAllUsers().then(function (usersFetched) {
    usersFetched.forEach(function (element) {
      indexFetch.student.push(element);
    });

  }).catch(function (error) {
    res.status(500).send(error);
  });

  messageService.fetchAllMessage().then(function (messagesFetched) {
    messagesFetched.forEach(function (element) {
      element.body = messageService.fetchMessageBody(element.body);
      indexFetch.message.push(element);
    });

    res.render('index', { user: indexFetch.student, message: indexFetch.message });
  }).catch(function (error) {
    res.status(500).send(error);
  });
});

router.post('/sendsms', function (req, res) {
  console.log(req.body);
  var newResponse = {
    text: req.body.text,
    phone:	req.body.phone
  };

  client.messages.create({
    to: newResponse.phone,
    from: '+14794394058',
    body: req.body.text
  }, function (err, message) {
    if (err) {
      console.log(err);
      res.render('thankyou', { confirmedMessage: "There has been some problem, Sorry Try again later" });
    } else {
      console.log(message);
      res.render('thankyou', { confirmedMessage: newResponse });
    }
  });
});

router.get('/fetchstudents', function (req, res) {
  console.log('getting all the student');
  studentService.fetchAllUsers().then(function (usersFetched) {
    res.status(200).send(usersFetched);
    console.log(usersFetched);
  }).catch(function (error) {
    res.status(500).send(error);
  });
});

router.get('/fetchmessages', function (req, res) {
    messageService.fetchAllMessage().then(function (messagesFetched) {
      res.status(200).send(messagesFetched);
    }).catch(function (error) {
      res.status(500).send(error);
    });
  });

router.get('/fetchstudents/getallnumber', function (req, res) {
  studentService.fetchUserPhoneNumber().then(function (phonenumberfetched) {
    res.status(200).send(phonenumberfetched);
  }).catch(function (error) {
    res.status(500).send(error);
  });
});

router.get('/fetchmessages/getallmsgbody', function (req, res) {
  messageService.fetchMessageBody().then(function (messagebodyfetched) {
    res.status(200).send(messagebodyfetched);
  }).catch(function (error) {
    res.status(500).send(error);
  });
});

router.get('/fetchstudents/getallnumber/getallname', function (req, res) {

  studentService.fetchUserName().then(function (namefetched) {
    res.status(200).send(namefetched);
  }).catch(function (error) {
    res.status(500).send(error);
  });
});

module.exports = router;
