var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl')

var config = require('./config.js');
var app = express();

app.use(bodyParser.json());
var corsOptions = {
	origin: 'http://localhost:3500'
};

app.use(cors(corsOptions));
app.use(session(config));
app.post('/api/login', userCtrl.login);






app.listen(3500, function() {
    console.log('app listening on Port 3500') 
});