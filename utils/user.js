var User = require('../models/user.model');
var collegeStudents = [{

  name: {
    first: 'JOy',
    last: 'Donoghue',
  },
  address: {
      streetAdress: '1219 N Storer Av',
      city: 'Fayettville',
      state: 'AR',
      postalCode: 72703
    },

  phonenumber: '+14792253839',
  age: 23,
  gender: 'Female',
  course: 'Engineering'
},

{
  name: {
    first: 'Kelley',
    last: 'Joshon'
  },
  adress: {
    streetAdress: '1551 N Levertte Av',
    city: 'Fayetteville',
    state: 'AR',
    postalCode: 72703
  },
  phonenumber: '+14798022053',
  age: 25,
  gender: 'Female',
  course: 'Engineering'
},

{
  name: {

    first: 'Tim',
    last:  'Doe'
  },
  adress: {
    streetAdress: '1219 N Storer Av',
    city: 'Fayettville',
    state: 'AR',
    postalCode: 72703
  },
  phonenumber: '+14793049769',
  age: '24',
  gender: 'Male',
  course: 'Engineering'

}];

module.exports = collegeStudents;
