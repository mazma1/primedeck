import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import truncateCourseName from '../../../../utils/truncateCourseName';

const CourseCard = props => (
  <div>
    {
      props.courses.map(course => (
        <div
          key={course.id}
          className="col-md-4"
          onClick={() => props.history.push(`courses/${course.id}`)}
        >
          <div className="col-sm-12 course-card">
            <h4>{course.code}</h4>
            <p>{truncateCourseName(course.name)}</p>
            <hr />
            <p>Instructor(s):</p>
          </div>
        </div>
      ))
    }
  </div>
);

CourseCard.propTypes = {
  courses: PropTypes.array.isRequired
};

export default withRouter(CourseCard);

