const Sequelize = require('sequelize');

const sequelize = require('../database/index');

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

User.associate = (models) => {
  User.belongsTo(models.Role, {foreignKey: 'roleId', as: 'role'})
  User.belongsToMany(models.Lesson, {through: 'presences'})
}

module.exports = User;