import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

const Select = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <select
      name={props.name}
      value={props.role}
      onChange={props.onChange}
      className="form-control"
    >
      <option value="">{props.placeholder}</option>
      {
        props.options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))
      };
    </select>
  </div>
);

Select.propTypes = propTypes;

export default Select;
