# Capstone_Project_Final
                  College Information system via SMS



This is an Administration login and sending SMS app using nodesjs, Express, passport, mongoose, and Twilio.

 $ npm init –y && npm express
Install all the dependencies module and devDependencies

Adding env file to gitignore
Echo .env > .gitignore
Git add, commit and push

*which denote the latest version 

 "bcryptjs": "*",        ---------which is used to passport hashing
    "body-parser": "*”, --------we can parse the body
    "connect-flash": "*",-------- used for flash message
    "cookie-parser": "^1.4.1",
    "dotenv": "^4.0.0",
    "express": "*",
    "express-handlebars": "*",------used for view engine
    "express-messages": "*",------- express message and session both are used      for flash message
    "express-session": "*",
    "express-validator": "*",----- to validate forms
    "mongodb": "*", -------- these are use in ORM interact with database
    "mongoose": "*",
    "passport": "*", ----- these modules for login like Facebook, twitter
    "passport-http": "*",
    "passport-local": "*",
    "twilio": "^2.11.1"

"devDependencies": { ---this is dev dependencies which is used for unit testing 
    "chai": "^3.5.0",
    "chai-http": "^3.0.0",
    "mocha": "^3.2.0",
    "supertest": "^3.0.0"
Run app npm start





Objective: This project is design to access student information for the administrator and then to send a SMS about holiday, tuition fee and inclement weather condition to the selected students.  This project is useful for the university and colleges and can be extended to other business where there is need a close contact between the administrator and the client. It will allow student to get the information very quickly and conveniently.


Method: 

•	JavaScript Framework,
•	node modules, 
•	external Libraries, 
•	Twilio API, 
•	Unit Test in Mocha, 
•	deployed in Heroku and 
•	database. 

JavaScript:    JavaScript is a programming language used to makes web pages interactive. It runs on client side as well as it supports server side using node.js.it is also strongly support object oriented language. It is a light weight and effecient. It is developed for Netscape. 


Node.js: node.js is a run time JavaScript built on chrome’s V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. NPM (node package manager) is the largest ecosystem of open source libraries in the world. It was originally written by Ryan Dahl in 2009. Node.js runs on single threaded event loop and support asynchronous calls for doing various things, like I/O operations.


Expressjs: Expressjs is a web application and mobile application framework that provides a robust set of features.


Mongo dB: I have three collections ‘User’, ‘Messages’ and ‘Students’. Student’ collection includes student name, address, phone number, age, gender and course. Similarly, Message collection have title and body. Finally, there is username, password and email in the login User collection.

Twilio API:  Twilio API can be used for various proposes, but I use this for sending an SMS.  I use HTTP Post method and it has following three parameters: 
•	To: The destination phone number which I store in the student document.
•	From: A Twilio phone number that can be used to send SMS to student phone number.
•	Body: This is the text of Message which store in the Mongo dB database.




Handlebars: Handlebar.js is a client side templating engine for JavaScript. Handlebar is one of the most advanced feature-rich, and popular of all the JavaScript templating engines. It has a logic-less templating that are on the HTML page. It keeps HTML page simple and clean.

