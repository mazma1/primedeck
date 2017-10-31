import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pagination from '../Pagination';
import { getAllUsers } from '../../actions/users';

/** Table of users that have read a message */
class UsersTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trip: 1
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  /**
   * Handles click on change of page
   *
   * @param {object} page
   *
   * @returns {void}
   */
  handlePageClick(page) {
    const { selected } = page;
    const limit = 2;
    const offset = Math.ceil(selected * limit);
    this.setState({ trip: this.state.trip + 1 });
    this.props.getAllUsers({ offset, limit });
  }

  /**
 * Render
 * @returns {ReactElement} Search table markup
 */
  render() {
    const { users, pagination } = this.props;
    let userRow;

    if (!users) {
      return <div>Loading...</div>;
    }

    if (users) {
      userRow = users.map((user, index) => (
        <tr key={user.id}>
          <td>{index + 1}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>@{user.username}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.role}</td>
        </tr>
      ));
    }

    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Phone Number</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
        {users.length > 0 ?
          <Pagination
            pageCount={pagination.numberOfPages}
            handlePageClick={this.handlePageClick}
          />
          : ''}
      </div>
    );
  }
}

UsersTable.propTypes = {
  // messageId: PropTypes.number.isRequired,
  // messages: PropTypes.array.isRequired
};

export default connect(null, { getAllUsers })(UsersTable);
