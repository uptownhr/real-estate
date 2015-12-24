"use strict"
const Template = require('../models/Template'),
  Listing = require('../models/Listing'),
  Services = require('../models/Services'),
  Testimony = require('../models/Testimony')

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  Template.findOne((err,template) => {
    Listing.find( (err, listings) => {
      console.log(listings);
      Services.find( (err, services) => {
        Testimony.find( (err, test) => {
          res.render('home', {
            title: 'Home',
            template: template,
            listings: listings,
            service: services,
            testimony: test
          });
        });
      })
    })
  })
};