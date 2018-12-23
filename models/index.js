var users = require('../schema/users');

exports.User = mongoose.model('Users', users.schema) //model mongoose qui s'appelle user et qui se base sur le schema importé