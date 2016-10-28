var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:@localhost/shyftdb';
// var connectionString = config.connectionString;

// facebook oAuth
var passport = require('passport')
// passkey
var config = require('./config/auth.js');
// fb Strategy ? do i need the OAuth2Strategy on the end of line
var FacebookStrategy = require('passport-facebook').Strategy.OAuth2Strategy;


var corsOptions = {
  origin:'http://localhost:8000'
}


var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));


// maybe we'll use sessions later
// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: config.sessionSecret
// }))





///Controllers///
var citiesCtrl = require('./server/controllers/citiesCtrl.js');



///Requests///


app.get('/cities', citiesCtrl.getCities);
app.get('/cityDetails/:id', citiesCtrl.getOneCity);

app.post('/checkZip', citiesCtrl.checkZip);



// *********************************************************************************************************************************************************
// FB
// *********************************************************************************************************************************************************

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8000/auth/facebook/callback"
  }, function(accessToken, refreshToken, profile, done) {
          // console.log(profile);
          db.find_user([profile.id], function(err, user){
              if (err) return done(err);

              if (!user[0]) {
                db.add_user([profile.id, profile.name.familyName, profile.name.givenName],  function(err, response){
                      if (err) {
                        console.log("*****************", err);
                      }
                      console.log('*********************', response);
                        return done(null, response)
                });
              }
          });
        done(null, profile);
    }
));

// direct user to Fb to login
app.get('/auth/facebook', passport.authenticate('facebook'));

// Fb oAuth
// Facebook will redirect the user to this URL after approval.
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

var port = 8000;
app.listen(port, function(){
  console.log('Shyft: Port ' + port + ' is listening.');
});
