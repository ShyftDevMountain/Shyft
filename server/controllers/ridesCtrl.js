var app = require('../../server.js');
var db = app.get('db');


module.exports = {
  createRide: function(req, res, next) {
      db.createRide([req.body.originlat, req.body.originlong, req.body.origindate, req.body.destlat, req.body.destlong, req.body.driver_id, req.body.rider_id], function(err, ride) {
        if(err) {
          res.status(500).json(err);
        }
        else {
          res.status(200).json('Your ride will arrive in 5 minutes.');
        }
      })
  },


  arriveRide: function(req, res, next) {
    db.arriveRide([req.body.rideid], function(err) {
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json('Your driver has arrived.');
      }
    })
  },


  cancelRide: function(req, res, next) {
    db.cancelRide([req.body.rideid], function(err){
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json('Your ride has been cancelled.');
      }
    })
  }


}
