import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import CheckAuth from '../components/CheckAuth';
import SignInForm from '../components/main/SignInForm';
import AdminDashboard from '../components/admin/AdminDashboard';
import TeacherDashboard from '../components/teacher/TeacherDashboard';
import StudentDashboard from '../components/student/StudentDashboard';
import RegistrationForm from '../components/admin/RegistrationForm';
import AllUsers from '../components/admin/AllUsers';
import AllCourses from '../components/admin/AllCourses';
import NewCourse from '../components/admin/NewCourse';
import SingleCoursePage from '../components/common/courses/SingleCoursePage';

/* eslint-disable react/jsx-max-props-per-line */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SignInForm} />
        <Route exact path="/admin" component={CheckAuth(AdminDashboard)} />
        <Route exact path="/admin/register" component={CheckAuth(RegistrationForm)} />
        <Route exact path="/admin/users" component={CheckAuth(AllUsers)} />
        <Route exact path="/admin/courses" component={CheckAuth(AllCourses)} />
        <Route exact path="admin/courses/:id" component={CheckAuth(SingleCoursePage)} />
        <Route exact path="/admin/new-course" component={CheckAuth(NewCourse)} />
        <Route path="/teacher" component={CheckAuth(TeacherDashboard)} />
        <Route path="/student" component={CheckAuth(StudentDashboard)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
