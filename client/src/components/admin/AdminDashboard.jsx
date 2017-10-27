import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AdminFrame from '../admin/AdminFrame';
import Statistics from '../../components/admin/Statistics';


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
    const token = localStorage.getItem('jwtToken');
    const { role } = this.props.user;
    if (token && role !== 'admin') {
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
        <AdminFrame>
          <Statistics />
        </AdminFrame>
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

