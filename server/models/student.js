export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    studentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    age: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    className: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
  Student.associate = (models) => {};
  return Student;
};
