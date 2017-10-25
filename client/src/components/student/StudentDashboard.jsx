import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/main/NavigationBar';

/**
  * Display Student Dashboard
  *
  * @class StudentDashboard
  *
  * @extends {React.Component}
  */
class StudentDashboard extends React.Component {

  /**
    * Checks if a user is a student before component is rendered
    *
    * @memberof StudentDashboard
    */
  componentDidMount() {
    const { role } = this.props.user;
    if (role !== 'student') {
      toastr.error('You do not have permission to access this page');
      this.props.history.push('/signin');
    }
  }

  /**
    * Renders StudentDashboard markup
    *
    * @returns {ReactElement} StudentDashboard component
    */
  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Shout out for Student!</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signedInUser.user
  };
}

StudentDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(StudentDashboard);
