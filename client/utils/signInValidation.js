const isEmpty = require('lodash/isEmpty');

/**
   * Validates a user's credentials for sign in
   *
   * @param {any} data credentials submitted for sign in
   * @returns {response} validation errors(if any)
   */
export default function validateInput(data) {
  const errors = {};

  if (!data.identifier) {
    errors.identifier = 'Username or Email is required';
  }
  if (data.identifier.trim().length === 0) {
    errors.identifier = 'Username or Email cannot be empty';
  }
  if (!data.password) {
    errors.password = 'Password is required';
  } else if (data.password.trim().length === 0) {
    errors.password = 'Password cannot be empty';
  }
  return {
    errors,
    valid: isEmpty(errors)
  };
}
