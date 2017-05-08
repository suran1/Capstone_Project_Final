require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var mongoose = require('mongoose');
var studentService = require('./services/student.service');
var mongodb = require('./utils/mongodb.utils');
var messageService = require('./services/message.services');
var User = require('./models/user.model');
var Message = require('./models/message.model.js');
var seed = require('./data.seed.js');

var port =  process.env.PORT || 3000;
var app = express();

mongodb.createEventListeners();
mongodb.connect();

seed.studentSeed();
seed.messageSeed();

var users = require('./routes/users');
var routes = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({ defaultLayout: 'layout' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function (param, msg, value) {
    var namespace = param.split('.'),
    root = namespace.shift(),
    formParam = root;
    while (namespace.length) {
      fromParam += '[' + namespace.shift() + ']';
    }

    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use(flash());

app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

app.use('/', routes);
app.use('/users', users);

app.listen(port, function () {
    console.log('Server is running...' + port);
  });
  
