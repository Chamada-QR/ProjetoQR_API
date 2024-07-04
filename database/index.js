const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('projetoqr', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false
})

module.exports = sequelize
