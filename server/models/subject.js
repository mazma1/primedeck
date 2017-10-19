export default (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    title: DataTypes.STRING,
    allowNull: false,
  });
  Subject.associate = (models) => { };
  return Subject;
};
