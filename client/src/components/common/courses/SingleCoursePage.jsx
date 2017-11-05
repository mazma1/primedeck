import React from 'react';
import AdminFrame from '../../admin/AdminFrame';
import CourseBanner from '../../common/courses/CourseBanner';
import CourseDetails from '../../common/courses/CourseDetails';

const SingleCoursePage = () => {
  return (
    <div>
      <AdminFrame>
        <div className="all-courses">
          <h3 className="reg-header">All Courses</h3>
          <div className="container-fluid">
            <div className="row">
              <h1>Single Course Page</h1>
              <CourseBanner />
              <CourseDetails />
            </div>
          </div>
        </div>
      </AdminFrame>
    </div>
  );
};

export default SingleCoursePage;
