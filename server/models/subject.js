export default (sequelize, DataTypes) => {
  const Subject = DataTypes.define('Subject', {
    title: {
      allowNull: false,
      type: DataTypes.STRING,
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
    teacherId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    note: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING)
    }
  });
  Subject.associate = (models) => { };
  return Subject;
};
