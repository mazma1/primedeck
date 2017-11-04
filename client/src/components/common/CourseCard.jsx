import React from 'react';
import PropTypes from 'prop-types';
import truncateCourseName from '../../../utils/truncateCourseName'

const CourseCard = ({ courses }) => (
  <div>
    {
      courses.map(course => (
        <div key={course.id} className="col-md-4">
          <div className="col-sm-12 course-card">
            <h4>{course.code}</h4>
            <p>{truncateCourseName(course.name)}</p>
            <hr />
            <p>Taught By:</p>
          </div>
        </div>
      ))
    }
  </div>
);

CourseCard.propTypes = {
  courses: PropTypes.object.isRequired
};

export default CourseCard;

