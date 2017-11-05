import React, { Component } from 'react';
import AdminFrame from '../admin/AdminFrame';

class NewCourse extends Component {
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
          <h3 className="reg-header">Add New Course</h3>
          <form>
            <div className="form-group">
              <label>First Name</label>
              <input type="text" className="form-control" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" className="form-control" placeholder="Last Name" />
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </AdminFrame>
    );
  }
}

export default NewCourse;
