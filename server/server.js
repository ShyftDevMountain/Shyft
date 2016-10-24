var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var config = require('./config')
var connectionString = 'postgres://postgres:@localhost/shyftdb';
// var connectionString = config.connectionString;
var session = require('express-session')

var app = express();
module.exports = app;

var massiveInstance = massive.connectSync({connectionString: connectionString});

app.set('db', massiveInstance);

app.use(cors());

app.use(bodyParser.json());
app.use(express.static('../public'));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret
}))




///Controllers///
var userCtrl = require('./controllers/passengerCtrl');



///Requests///

var port = config.port;
app.listen(port, function(){
  console.log('Shyft: Port ' + port + ' is listening.');
});
