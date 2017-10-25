module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('StudentSubjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      subjectId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('StudentSubjects');
  }
};
