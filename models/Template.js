var mongoose = require('mongoose');

var templateSchema = new mongoose.Schema({
  first_name: {type: String, default: 'James'},
  last_name: {type: String, default: 'Lee'},
  title: {type: String, default: 'Application Developer'},
  tag: {type: String, default: 'Full-stack application developer'},
  brief_intro: {type: String, default: 'Hi I\'m a developer that loves working on products. I enjoy building my skills and toolset to pump out MVPs in lightning speed.'},
  about_me: {type: String, default: 'Currently the VP of Technology at Processing.com, working on the next generation payment processing platform. I\'ve been programming 20+ years since I was a teenager and have picked up many other skills along the way. My passion has been working on the full-stack of product development. From design, development and marketing, I love pushing out products fast and lean. '},
  address: {type: String, default: '1234 Wilshire Blvd,\nLos Angeles, CA 90017'},
  phone: {type: String, default: '818-252-9797'},
  fax: {type: String, default: '888-888-8888'},
  email: {type: String, default: 'jlee@penguin.ws'},
  photo_url: {type: String, default: 'http://cdn-cms.pgimgs.com/static/2015/09/real-estate-agent-headshot.jpg'},
  disclaimer: {type: String, default: 'Our services are dank'},
  social: {
    twitter: {type: String, default: 'https://www.twitter.com/jleebiz'},
    facebook: {type: String, default: 'https://www.facebook.com/uptownhr'},
    linkedin: {type: String, default: 'https://www.linkedin.com/in/uptown'},
    github: {type: String, default: 'https://www.github.com/uptownhr'},
    skype: {type: String, default: 'uptownhr'}
  },
  footer: {type: String, default: 'you may not pass'}
}, {minimize: false, strict: false});

templateSchema.virtual('full_name').get( function(){
  return this.first_name + ' ' + this.last_name
})

module.exports = mongoose.model('Template', templateSchema)