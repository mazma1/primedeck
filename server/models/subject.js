export default (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    teacherId: {
      allowNull: false,
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  });
  Subject.associate = (models) => { };
  return Subject;
};
