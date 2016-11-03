var app = require('../../server.js');
var db = app.get('db');

module.exports = {

  getCustomer: function(req, res, next) {
    db.get_customer([req.session.passport.user.id],function(err, customerInfo) {;
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(customerInfo);
      }
    });
  },

  updateCustomer: function(req, res, next) {
    db.update_customer([req.body.name, req.body.email, req.body.phone], function(err, customerInfo) {
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
