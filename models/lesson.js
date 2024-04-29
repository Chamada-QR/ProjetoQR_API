const Sequelize = require('sequelize');

const sequelize = require('../database/index');

const Lesson = sequelize.define('lesson', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  qr_code: Sequelize.STRING,
  status: Sequelize.STRING,
  data: Sequelize.DATE,
}) 

module.exports = Lesson;