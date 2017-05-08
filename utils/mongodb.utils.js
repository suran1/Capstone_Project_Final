var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = {
  createEventListeners: createEventListeners,
  connect: connect,
  disconnect: disconnect
};

function createEventListeners() {
  mongoose.connection.on('connected', function () {
    console.log('Successfully connected to database.');
  });

  mongoose.connection.on('disconnected', function () {
    console.log('Database connection closed.');
  });

  mongoose.connection.on('error', function (err) {
    console.log('There was an issue connecting to the database: ' + err);
  });
}

function connect() {

  mongoose.connect(process.env.MONGO_DB);

}

function disconnect() {
  mongoose.disconnect();
}
