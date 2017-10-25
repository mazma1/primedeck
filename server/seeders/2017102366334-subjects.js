module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert('Subjects', [
      {
        name: 'Mathematics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'English',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Physics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Geography',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Further Mathematics',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {}),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete('Subjects', null, {})
};
