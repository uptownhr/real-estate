"use strict"
const Template = require('../models/Template'),
  Listing = require('../models/Listing'),
  Services = require('../models/Services'),
  Testimony = require('../models/Testimony'),
  defaults = require('../config/init').default

/**
 * GET /
 * Home page.a
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

        var temp = {primary_photo_url: {default: 'http://cdn-cms.pgimgs.com/static/2015/09/real-estate-agent-headshot.jpg'}};
        var rows = q.reduce(function (prev, item, i) {
          if(i % 3 === 0)
            prev.push([item]);
          else
            prev[prev.length - 1].push(item);
          return prev;
        }, []);
        var lens = rows.length;
        console.log(lens, rows[lens-1].length);
        while(rows[lens-1].length < 3){
          rows[lens-1].push([temp]);
        }
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