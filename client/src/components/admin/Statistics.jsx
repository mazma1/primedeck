import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { getUsersStatistics } from '../../actions/users';

const propTypes = {
  getUsersStatistics: PropTypes.func.isRequired,
  allUsers: PropTypes.object.isRequired
};

class Statistics extends Component {

  componentDidMount() {
    this.props.getUsersStatistics();
  }

  render() {
    const { admins, instructors, students } = this.props.allUsers;
    return (
      <div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>{admins}</h1>
            <hr />
            <h4>Admins</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>{students}</h1>
            <hr />
            <h4>Students</h4>
          </div>
        </div>
        <div className="col-md-4">
          <div className="col-sm-12 card text-center">
            <h1>{instructors}</h1>
            <hr />
            <h4>Instructors</h4>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsers: state.allUsers
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({
  getUsersStatistics
}, dispatch);


Statistics.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(Statistics);
