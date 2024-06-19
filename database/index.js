const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('projetoqr', 'Nersonson', '', {
  host: 'localhost',
  dialect: 'mariadb'
})

module.exports = sequelize
