module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Subjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
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
      teacherId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      note: {
        allowNull: false,
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    return queryInterface.dropTable('Users');
  }
};
