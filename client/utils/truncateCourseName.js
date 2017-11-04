/**
   * Function that truncates the name of a course
   * if it is length is longer than 24
   *
   * @param {string} course Name of course
   *
   * @returns {string} course
   */
function truncateCourseName(course) {
  if (course.length > 25) {
    return `${course.substring(0, 25)}...`;
  }
  return course;
}

export default truncateCourseName;

