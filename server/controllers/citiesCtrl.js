var app = require('../server.js');
var db = app.get('db');
module.exports = {

getCities: function(req, res, next) {
  db.get_cities(function(err, cities) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(cities);
    }
  });
},


getOneCity: function(req, res, next) {
  db.get_one_city([req.params.id], function(err, cityDetails) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(cityDetails);
    }
  });
},

getZips: function(req, res, next) {
  db.get_zips(function(err, zips) {
    if(err) {
      res.status(500).json(err);
    }
    else {
      res.status(200).json(zips);
    }
  });
}

}
