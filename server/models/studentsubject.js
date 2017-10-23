export default (sequelize, DataTypes) => {
  const StudentSubject = sequelize.define('StudentSubject', {
    studentId: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    subjectId: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  });
  StudentSubject.associate = (models) => { };
  return StudentSubject;
};
