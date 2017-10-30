import React, { Component } from 'react';
import AdminFrame from '../admin/AdminFrame';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: ''
    };

    this.handleRoleChange = this.handleRoleChange.bind(this);
  }

  handleRoleChange(event) {
    this.setState({ role: event.target.value });
  }
  render() {
    const { role } = this.state;
    return (
      <AdminFrame>
        <div className="col-sm-12 form">
          <h3 className="reg-header">Registration Form</h3>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="number" className="form-control" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label>Role</label>
              <select
                className="form-control"
                onChange={this.handleRoleChange}
                value={this.state.role}
              >
                <option>-- Pick a Role --</option>
                <option value="admin">Admin</option>
                <option value="instructor">Instructor</option>
                <option value="student">Student</option>
              </select>
            </div>
            <div className={role === 'student' ? 'student' : 'no-display'}>
              <div className="form-group">
                <label>Age</label>
                <input type="number" className="form-control" placeholder="Age" />
              </div>
              <div className="form-group">
                <label>Class</label>
                <input type="text" className="form-control" placeholder="Class" />
              </div>
            </div>
            <div className={role === 'student' || role === 'instructor' ? 'courses' : 'no-display'}>
              <div className="form-group">
                <label>Courses</label>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> English
                  </label>
                </div>
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Mathematics
                  </label>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </AdminFrame>
    );
  }
}

export default RegistrationForm;
