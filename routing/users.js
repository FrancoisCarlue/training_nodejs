var users = require('../controllers/users');

app.get('/users' , users.index);
app.get('/users/:name',users.one);