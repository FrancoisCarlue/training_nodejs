var users = require('../controllers/users');

app.get('/users' , users.index);
app.get('/users/1',users.one);