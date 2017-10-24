import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../../components/main/Navbar';

class TeacherDashboard extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar username={this.props.firstname} />
        <h2>Shout out for Teacher!</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    firstname: state.signedInUser.user.firstname
  };
}

export default connect(mapStateToProps)(TeacherDashboard);
