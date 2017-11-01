import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  courses: React.PropTypes.array.isRequired,
  selectedCourses: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

const CheckboxGroup = props => (
  <div className="form-group">
    <label>{props.label}</label>
    {
      props.courses.map(course => (
        <div className="checkbox" key={course.id}>
          <label>
            <input
              onChange={props.onChange}
              value={course.id}
              checked={(props.selectedCourses.includes(course.id))}
              type="checkbox"
            /> {course.name}
          </label>
        </div>
      ))
    }
  </div>
);

CheckboxGroup.propTypes = propTypes;

export default CheckboxGroup;
