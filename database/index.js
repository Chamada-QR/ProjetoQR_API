const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projetoqr', 'root', 'teste123456', {
  host: 'localhost',
  dialect: 'mariadb',
});

module.exports = sequelize;
