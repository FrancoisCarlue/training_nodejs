var path = require('path');
var express = require('express');
Promise = require('bluebird');
mongoose = Promise.promisifyAll(require('mongoose'));
fs = Promise.promisifyAll(require('fs'));
logLib = require('./lib/log'); //bien partir de la racine pour le require de notre lib maison
app = express(); // mis en global pour que ce soit accessible aux autres fichiers de routing

//config
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/book_phone', { useNewUrlParser: true });

//import models
models = require('./models');

//import routing
require('./routing/callback');
require('./routing/users');



console.log(new models.User());

app.listen(8080);
