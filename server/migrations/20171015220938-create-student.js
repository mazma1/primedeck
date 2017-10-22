module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Students', {
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
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      className: {
        allowNull: false,
        type: Sequelize.STRING,
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
    return queryInterface.dropTable('Students');
  }
};
