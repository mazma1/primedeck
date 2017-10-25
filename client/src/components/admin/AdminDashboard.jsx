import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavigationBar from '../../components/main/NavigationBar';


/**
 * Display AdminDashboard
 *
 * @class AdminDashboard
 *
 * @extends {React.Component}
 */
class AdminDashboard extends React.Component {

  /**
   * Checks if a user is an admin before component is rendered
   *
   * @memberof AdminDashboard
   */
  componentDidMount() {
    const { role } = this.props.user;
    if (role !== 'admin') {
      toastr.error('You do not have permission to access this page');
      this.props.history.push('/signin');
    }
  }

  /**
   * Renders AdminDashboard markup
   *
   * @returns {ReactElement} AdminDashboard component
   */
  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Shout out for Admin!</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signedInUser.user

  };
}

AdminDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(AdminDashboard);

