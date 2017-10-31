import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminFrame from '../admin/AdminFrame';
import SingleInput from '../common/SingleInput';
import Select from '../common/Select';
import CheckboxGroup from '../common/CheckboxGroup';
import { getAllCourses } from '../../actions/courses';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phoneNumber: '',
      roleOptions: ['admin', 'instructor', 'student'],
      role: '',
      age: '',
      class: '',
      selectedCourses: []
    };

    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitNewUser = this.submitNewUser.bind(this);
    this.handleCourseSelection = this.handleCourseSelection.bind(this);
  }

  componentDidMount() {
    this.props.getAllCourses();
  }

  handleRoleChange(event) {
    this.setState({ role: event.target.value });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCourseSelection(event) {
    const newSelection = event.target.value;
    let newSelectionArray;

    if (this.state.selectedCourses.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selectedCourses.filter(course => course !== newSelection);
    } else {
      newSelectionArray = [...this.state.selectedCourses, newSelection];
    }

    this.setState({ selectedCourses: newSelectionArray });
  }

  submitNewUser(event) {
    event.preventDefault();
    console.log(this.state, 'current state')
  }

  render() {
    const { role } = this.state;
    return (
      <AdminFrame>
        <div className="col-sm-12 form">
          <h3 className="reg-header">Register New User</h3>
          <form onSubmit={this.submitNewUser}>
            <SingleInput
              label="First Name"
              name="firstName"
              inputType="text"
              content={this.state.firstName}
              onChange={this.handleInputChange}
              placeholder="First Name"
            />
            <SingleInput
              label="Last Name"
              name="lastName"
              inputType="text"
              content={this.state.lastName}
              onChange={this.handleInputChange}
              placeholder="Last Name"
            />
            <SingleInput
              label="Username"
              name="username"
              inputType="text"
              content={this.state.username}
              onChange={this.handleInputChange}
              placeholder="username"
            />
            <SingleInput
              label="Email"
              name="email"
              inputType="email"
              content={this.state.email}
              onChange={this.handleInputChange}
              placeholder="me@example.com"
            />
            <SingleInput
              label="Phone Number"
              name="phoneNumber"
              inputType="number"
              content={this.state.phoneNumber}
              onChange={this.handleInputChange}
              placeholder="Phone Number"
            />
            <Select
              label="Role"
              name="role"
              role={this.state.role}
              onChange={this.handleRoleChange}
              placeholder="-- Pick a Role --"
              options={this.state.roleOptions}
            />
            <div className={role === 'student' ? 'student' : 'no-display'}>
              <SingleInput
                label="Age"
                name="age"
                inputType="number"
                content={this.state.age}
                onChange={this.handleInputChange}
                placeholder="Age"
              />
              <SingleInput
                label="Class"
                name="class"
                inputType="text"
                content={this.state.class}
                onChange={this.handleInputChange}
                placeholder="Class"
              />
            </div>
            <div className={role === 'student' || role === 'instructor' ? 'courses' : 'no-display'}>
              <CheckboxGroup
                label="Courses"
                onChange={this.handleCourseSelection}
                courses={this.props.courses}
                selectedCourses={this.state.selectedCourses}
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </AdminFrame>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses.courses
  };
}

export default connect(mapStateToProps, { getAllCourses })(RegistrationForm);
