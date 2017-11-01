import React, { Component } from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminFrame from '../admin/AdminFrame';
import SingleInput from '../common/SingleInput';
import Select from '../common/Select';
import CheckboxGroup from '../common/CheckboxGroup';
import { getAllCourses } from '../../actions/courses';
import { submitNewUser } from '../../actions/users';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phoneNumber: '',
      roleOptions: ['admin', 'teacher', 'student'],
      role: '',
      age: '',
      className: '',
      courses: []
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
    const newSelection = parseInt(event.target.value, 10);
    let newSelectionArray;
    if (this.state.courses.includes(newSelection)) {
      newSelectionArray = this.state.courses.filter(course => course !== newSelection);
    } else {
      newSelectionArray = [...this.state.courses, newSelection];
    }
    this.setState({ courses: newSelectionArray });
  }

  submitNewUser(event) {
    event.preventDefault();
    this.props.submitNewUser(this.state).then(
      (res) => {
        console.log(res, '*****')
        toastr.success(res.data.message);
      }
    ).catch();
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
                name="className"
                inputType="text"
                content={this.state.class}
                onChange={this.handleInputChange}
                placeholder="Class"
              />
            </div>
            <div className={role === 'student' || role === 'teacher' ? 'courses' : 'no-display'}>
              <CheckboxGroup
                label="Courses"
                onChange={this.handleCourseSelection}
                courses={this.props.courses}
                selectedCourses={this.state.courses}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getAllCourses,
    submitNewUser
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
