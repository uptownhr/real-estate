"use strict"
const Template = require('../models/Template'),
  Listing = require('../models/Listing')

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  Template.findOne((err,template) => {
    Listing.find( (err, listings) => {
      res.render('home', {
        title: 'Home',
        template: template,
        listings: listings
      });
    })
  })
};