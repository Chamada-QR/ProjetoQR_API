const Sequelize = require('sequelize');

const sequelize = require('../database/index');

const Presence = sequelize.define('presence', {
  status: Sequelize.STRING,
}) 

module.exports = Presence;