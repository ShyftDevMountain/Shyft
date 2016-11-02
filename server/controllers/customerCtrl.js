var app = require('../../server.js');
var db = app.get('db');

module.exports = {

  getCustomer: function(req, res, next) {
    db.get_customer(function(err, customerInfo) {
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json(customerInfo);
      }
    });
  }



};
