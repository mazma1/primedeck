import React from 'react';
import toastr from 'toastr';
import { connect } from 'react-redux';
import NavigationBar from '../../components/main/Navbar';

class TeacherDashboard extends React.Component {

  componentDidMount() {
    const { role } = this.props.user;
    if (role !== 'teacher') {
      toastr.error('You do not have permission to access this page');
      this.props.history.push('/signin');
    }
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <h2>Shout out for Teacher!</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.signedInUser.user
  };
}

export default connect(mapStateToProps)(TeacherDashboard);
