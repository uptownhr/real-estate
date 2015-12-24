var mongoose = require('mongoose');

var testSchema = new mongoose.Schema ({   //this is setting up the schema of the object and the "keys" involved
  primary_photo: {type: String, default: ''},
  test: {type: String, default: 'I write the cleanest code, nothing complex'},
  name: {type: String, default: 'John Wayne'}
});

var test = mongoose.model('test', testSchema);  //set var "Sites" mongoose.model method that create model from the schema above titled "Lists"

module.exports = test;