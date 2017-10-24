import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toastr from 'toastr';
import validateInput from '../../../utils/signInValidation';
import { signInRequest } from '../../actions/auth';

/* eslint-disable function-paren-newline */
class SignInForm extends React.Component {
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

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  isValid() {
    const { errors, valid } = validateInput(this.state);
    if (!valid) {
      this.setState({ errors });
    }
    return valid;
  }

  handleSignIn(event) {
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      this.props.signInRequest(this.state).then(
        () => {
          console.log(this.props.role)
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


  render() {
    return ( 
      <div className="flex-container">
        <h2 className="brand-text">Prime Deck</h2>
        <form className="form-width form-panel" onSubmit={this.handleSignIn}>
          <h4 className="text-center padding-bottom24">SIGN IN</h4>
          <div className="form-group">
            <label htmlFor="identifer">Username/Email</label>
            <input
              type="text"
              name="identifier"
              className="form-control"
              placeholder="Username or Email"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={this.onChange} 
            />
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

export default connect(mapStateToProps, { signInRequest })(SignInForm);

