import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  inputType: PropTypes.oneOf(['text', 'email', 'number']).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

const SingleInput = props => (
  <div className="form-group">
    <label>{props.label}</label>
    <input
      className="form-control"
      name={props.name}
      type={props.inputType}
      value={props.content}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  </div>
);

SingleInput.propTypes = propTypes;

export default SingleInput;
