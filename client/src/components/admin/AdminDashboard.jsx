import React from 'react';
import { connect } from 'react-redux';
import NavigationBar from '../../components/main/Navbar';

class AdminDashboard extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar
          firstname={this.props.user.firstname}
          lastname={this.props.user.lastname}
        />
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

export default connect(mapStateToProps)(AdminDashboard);

