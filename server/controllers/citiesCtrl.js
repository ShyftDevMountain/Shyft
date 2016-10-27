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
}





}
