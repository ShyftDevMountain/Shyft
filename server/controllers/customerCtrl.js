var app = require('../../server.js');
var db = app.get('db');

module.exports = {

  isloggedin: function(req,res,next){
    if (!req.session.passport) {
      res.send(false)
    }
    else {
      res.send(true)
    }
  },

  getCustomer: function(req, res, next) {
    db.get_customer([req.session.passport.user.id],function(err, customerInfo) {
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(customerInfo);
      }
    });
  },

  getCustomerRides: function(req, res, next) {
    db.get_customer_rides([req.session.passport.user.id],function(err, rides) {
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(rides);
      }
    });
  },

  updateCustomer: function(req, res, next) {
    db.update_customer([req.body.displayname, req.body.email, req.body.phone, req.session.passport.user.id], function(err, customerInfo) {
      console.log(req.body);
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json('Customer Info Updated');
      }
    })
  }



};
