export default (sequelize, DataTypes) => {
  const Resource = sequelize.define('Resource', {
    subjectId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    topic: {
      allowNull: false,
      type: DataTypes.STRING,
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
    },
    teacherId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    note: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  });
  Resource.associate = (models) => { };
  return Resource;
};
