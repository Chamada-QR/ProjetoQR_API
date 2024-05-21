const Sequelize = require('sequelize');

const sequelize = require('../database/index');

const Lesson = sequelize.define('lesson', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  qr_code: Sequelize.STRING,
  status: Sequelize.BOOLEAN,
  date: Sequelize.DATE,
}) 

Lesson.associate = (models) => {
  Lesson.belongsToMany(models.User, {through: 'presences'})
}
module.exports = Lesson;