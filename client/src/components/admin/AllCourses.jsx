import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminFrame from '../admin/AdminFrame';
import CourseCard from '../common/CourseCard';
import { getAllCourses } from '../../actions/courses';

class AllCourses extends Component {

  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    return (
      <div>
        <AdminFrame>
          <div className="all-courses">
            <h3 className="reg-header">All Courses</h3>
            <div className="container-fluid">
              <div className="row">
                <CourseCard courses={this.props.courses} />
              </div>
            </div>
          </div>
        </AdminFrame>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    courses: state.courses.courses
  };
}

AllCourses.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired
};

export default connect(mapStateToProps, { getAllCourses })(AllCourses);
