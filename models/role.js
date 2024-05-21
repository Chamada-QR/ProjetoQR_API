const Sequelize = require('sequelize');

const sequelize = require('../database/index');

const Role = sequelize.define('role', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: Sequelize.STRING,
}) 

Role.associate = (models) => Role.hasMany(models.User, {as: 'user'})

module.exports = Role;