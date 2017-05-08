var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

it('should be fine', function (done) {
  chai.request('http://localhost:3000')
  .get('/fetchstudents')
  .end(function (error, response) {
    expect(response).to.have.body;
    done();
  });
});

it('should be fine', function (done) {
  chai.request('http://localhost:3000')
  .get('/fetchmessages')
  .end(function (error, response) {
    expect(response).to.have.body;
    done();
  });
});

it('should be fine', function (done) {
  chai.request('http://localhost:3000')
  .get('/fetchstudents/gettallnumber')
  .end(function (error, response) {
    expect(response).to.have.body;
    done();
  });
});

it('should be fine', function (done) {
  chai.request('http://localhost:3000')
  .get('/fetchstudents/gettallnumber/getallname')
  .end(function (error, response) {
    expect(response).to.have.body;
    done();
  });
});

it('should be fine', function (done) {
  chai.request('http://localhost:3000')
  .get('/fetchmessages/getallmsgbody')
  .end(function (error, response) {
    expect(response).to.have.body;
    done();
  });
});
