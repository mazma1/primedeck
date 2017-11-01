export default (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    username: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        not: ['[a-z]', 'i']
      }
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.ENUM,
      values: ['admin', 'teacher', 'student'],
      validate: {
        isIn: [['admin', 'teacher', 'student']]
      }
    }
  });
  User.associate = (models) => {};
  return User;
};
