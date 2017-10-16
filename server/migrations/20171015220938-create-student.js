module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      StudentId: {
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
      class: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      admissionDate: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notEmpty: true
        }
      },
      admissionNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      guardianId: {
        type: Sequelize.INTEGER
      }
    });
  },
  down(queryInterface) {
    return queryInterface.dropTable('Students');
  }
};
