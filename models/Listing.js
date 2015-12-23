var mongoose = require('mongoose');

var listingSchema = new mongoose.Schema ({   //this is setting up the schema of the object and the "keys" involved
  title: String,                         //title of listing
  address: String,
  city: String,
  state: String,
  zip: String,
  description: String,                    //description of listing
  primary_photo_url: {type: String},     //url of pictures of listing
  price: String,
  nBed: String,
  nBath: String,
  nCar: String,
  sqft: String
});

var listing = mongoose.model('Listing', listingSchema);  //set var "Sites" mongoose.model method that create model from the schema above titled "Lists"

module.exports = listing;