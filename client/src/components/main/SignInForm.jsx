import React from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => (
  <div className="flex-container">
    <h2 className="brand-text">Prime Deck</h2>
    <form className="form-width form-panel">
      <h4 className="text-center padding-bottom24">SIGN IN</h4>
      <div className="form-group">
        <label htmlFor="identifer">Username/Email</label>
        <input type="email" className="form-control" placeholder="Username or Email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-success btn-block margin-top30">Submit</button>
    </form>
  </div>
);

export default SignInForm;
