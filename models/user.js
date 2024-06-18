const Sequelize = require('sequelize');

const sequelize = require('../database/index');
const Role = require('./role');

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  ra: Sequelize.STRING,
  roleId: Sequelize.INTEGER,
}) 

User.belongsTo(Role, {foreignKey: 'roleId', as: 'role'})

module.exports = User;