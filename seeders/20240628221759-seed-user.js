'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          ra: '123456',
          roleId: 1
        },
        {
          name: 'Jane Smith',
          ra: '654321',
          roleId: 2
        },
        {
          name: 'Alice Johnson',
          ra: '987654',
          roleId: 1
        }
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {})
  }
}
