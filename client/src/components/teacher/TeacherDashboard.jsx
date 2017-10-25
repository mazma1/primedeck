import React from 'react';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavigationBar from '../../components/main/NavigationBar';


/**
   * Display Teacher Dashboard
   *
   * @class TeacherDashboard
   *
   * @extends {React.Component}
   */
class TeacherDashboard extends React.Component {

  /**
    * Checks if a user is an instructor before component is rendered
    *
    * @memberof TeacherDashboard
    */
  componentDidMount() {
    const { role } = this.props.user;
    if (role !== 'teacher') {
      toastr.error('You do not have permission to access this page');
      this.props.history.push('/signin');
    }
  }

  /**
    * Renders Instructor Dashboard markup
    *
    * @returns {ReactElement} InstructorDashboard component
    */
  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Shout out for Instructor!</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signedInUser.user
  };
}

TeacherDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(TeacherDashboard);
