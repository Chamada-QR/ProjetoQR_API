const Sequelize = require('sequelize');

const sequelize = require('../database/index');
const Presence = require('./presence');
const User = require('./user');

const Lesson = sequelize.define('lesson', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  qr_code: Sequelize.STRING,
  status: Sequelize.BOOLEAN,
  date: Sequelize.DATEONLY,
}) 

Lesson.belongsToMany(User, {through: Presence})
User.belongsToMany(Lesson, {through: Presence})

module.exports = Lesson;