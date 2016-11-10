
var app = require('../../server.js');
var db = app.get('db');
module.exports = {

  createRide: function(req, res, next) {
      db.createRide([req.body.originlat, req.body.originlong, req.body.origindate, req.body.destlat, req.body.destlong, req.body.driver_id, req.session.passport.user.id], function(err, ride) {

        if(err) {
          res.status(500).json(err);
        }
        else {
          res.status(200).json('Your ride will be here in 5 minutes');
        }

      })
  },


  arriveRide: function(req, res, next) {
    db.arriveRide([req.body.origindate, req.params.rideid], function(err, resp) {
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json('Your driver has arrived.');
      }
    })
  },


  cancelRide: function(req, res, next) {
    db.cancelRide([req.params.rideid], function(err){
      if(err) {
        res.status(500).json(err);
      }
      else {
        res.status(200).json('Your ride has been cancelled.');
      }
    })
  },

  completeRide: function(req, res, next) {
    db.completeRide([req.body.rating, req.body.destdate, req.params.rideid], function(err){
      if(err) {
        res.status(500).json(err);
      }
      else{
        res.status(200).json('Thank you for your rating.');
      }
    })
  },

  getRideId: function(req, res, next){
    db.getRideId([req.session.passport.user.id], function(err, id){
      if(err){
        res.status(500).json(err);
      }
      else{
        res.status(200).json(id);
      }
    })
  }


}
