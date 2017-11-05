import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminFrame from '../admin/AdminFrame';
import UsersTable from '../admin/UsersTable';
import { getAllUsers } from '../../actions/users';

class AllUsers extends Component {

  componentDidMount() {
    const offset = 0;
    const limit = 2;
    this.props.getAllUsers({ offset, limit });
  }

  render() {
    const { allUsers, pagination } = this.props.usersDetails;
    return (
      <div>
        <AdminFrame>
          <div className="table-responsive form">
            <h3 className="reg-header">All Users</h3>
            <UsersTable users={allUsers} pagination={pagination} />
          </div>
        </AdminFrame>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    usersDetails: state.users
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUsers
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
