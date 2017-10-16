export default (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    StudentId: {
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
    class: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    admissionDate: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    admissionNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true
      }
    },
    guardianId: {
      type: DataTypes.INTEGER
    }
  });
  Student.associate = (models) => {};
  return Student;
};
