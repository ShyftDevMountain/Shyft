var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var massive = require('massive');
var connectionString = 'postgres://postgres:@localhost/shyftdb';
// var connectionString = config.connectionString;

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


var port = 8000;



app.listen(port, function(){
  console.log('Shyft: Port ' + port + ' is listening.');
});
