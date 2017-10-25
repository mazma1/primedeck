import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import toastr from 'toastr';
import validateInput from '../../../utils/signInValidation';
import { signInRequest } from '../../actions/auth';

/* eslint-disable function-paren-newline */

/**
   * Display Sign In Form
   *
   * @class SignInForm
   *
   * @extends {React.Component}
   */
class SignInForm extends React.Component {

  /**
    * Creates an instance of SignInForm
    *
    * @param {any} props
    *
    * @memberof SignInForm
    */
  constructor(props) {
    super(props);
    this.state = {
      identifier: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }


  /**
    * Handles change event of sign in input fields
    *
    * @param {SyntheticEvent} event
    *
    * @returns {void} null
    */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }


  /**
    * Handles input validation on client
    *
    * @returns {boolean} If an input is valid or not
    */
  isValid() {
    const { errors, valid } = validateInput(this.state);
    if (!valid) {
      this.setState({ errors });
    }
    return valid;
  }

  /**
    * Makes request to authenticate a user
    *
    * @param {SyntheticEvent} event
    *
    * @returns {void}
    */
  handleSignIn(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.signInRequest(this.state).then(
        () => {
          toastr.success('Sign in was successful. Welcome back!');
          if (this.props.role === 'admin') {
            this.props.history.push('/admin');
          }
          if (this.props.role === 'student') {
            this.props.history.push('/student');
          }
          if (this.props.role === 'teacher') {
            this.props.history.push('/teacher');
          }
        },
        ({ response }) => this.setState({ errors: response.data })
      );
    }
  }

  /**
    * Renders Sign In Form markup
    *
    * @returns {ReactElement} SignInForm component
    */
  render() {
    const { errors } = this.state;
    return (
      <div className="flex-container">
        <h2 className="brand-text">Prime Deck</h2>
        <form className="form-width form-panel" onSubmit={this.handleSignIn}>
          <h4 className="text-center padding-bottom24">SIGN IN</h4>
          <div className={classnames('form-group', { 'has-error': errors.identifier })}>
            <label htmlFor="identifer">Username/Email</label>
            <input
              type="text"
              name="identifier"
              className="form-control"
              placeholder="Username or Email"
              autoComplete="off"
              onChange={this.onChange}
            />
            {
              errors.identifier &&
              <span className="help-block padding-bottom8">
                {errors.identifier}
              </span>
           }
          </div>
          <div className={classnames('form-group', { 'has-error': errors.password })}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              autoComplete="off"
              onChange={this.onChange}
            />
            {
              errors.password &&
              <span className="help-block padding-bottom8">
                {errors.password}
              </span>
            }
          </div>
          <button type="submit" className="btn btn-success btn-block margin-top30">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    role: state.signedInUser.user.role
  };
}

SignInForm.propTypes = {
  role: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  signInRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { signInRequest })(SignInForm);

