var path = require('path');
var express = require('express');
Promise = require('bluebird');
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log'); //bien partir de la racine pour le require de notre lib maison

app = express(); // mis en global pour que ce soit accessible aux autres fichiers de routing

app.use(express.static('public'));

//import routing
require('./routing/callback');
require('./routing/users');

app.listen(8080);
