"use strict"
const Template = require('../models/Template'),
  Listing = require('../models/Listing'),
  Services = require('../models/Services'),
  Testimony = require('../models/Testimony'),
  defaults = require('../config/init').default

/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  Template.findOne((err,template) => {
    Listing.find( (err, listings) => {
      Listing.find().sort({_id: -1}).exec(function(err, q) {
        var max_listings = 8
        var listings_count = q.length
        var remainder = listings_count - max_listings

        if(remainder > 0){
          q.splice(listings_count-1, remainder);
        }


        var rows = q.reduce(function (prev, item, i) {
          if(i % 4 === 0)
            prev.push([item]);
          else
            prev[prev.length - 1].push(item);
          return prev;
        }, []);

        console.log(rows)

        Services.find( (err, services) => {
          Testimony.find( (err, test) => {
            res.render(defaults.home_view, {
              title: 'Home',
              template: template,
              listings: listings,
              service: services,
              testimony: test,
              rows: rows
            });
          });
        })
      })
    })
  })
  /*Template.findOne((err,template) => {
    Listing.find( (err, listings) => {
      Services.find( (err, services) => {
        Testimony.find( (err, test) => {
          res.render(defaults.home_view, {
            title: 'Home',
            template: template,
            listings: listings,
            service: services,
            testimony: test
          });
        });
      })
    })
  })*/
};