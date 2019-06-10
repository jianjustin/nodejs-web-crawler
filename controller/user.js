
let Sequelize = require('sequelize');
let sequelize = require('./db.js');

let User = sequelize.define('user', {
    username: { type: Sequelize.STRING, field: 'username'},
    email: {type: Sequelize.STRING, field: 'email'}
  }, {
    freezeTableName: true
  });
  
  let user = User.sync({ force: false});
  
  exports.addUser = function(username, email) {
    return User.create({
      username: username,
      email: email
    })
  };
  
  exports.findUserByName = function(username) {
    return User.findOne({
      where: {
        username: username
      }
    })
  };