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

/* eslint-disable react/jsx-max-props-per-line */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignInForm} />
        <Route path="/admin" component={CheckAuth(AdminDashboard)} />
        <Route path="/teacher" component={CheckAuth(TeacherDashboard)} />
        <Route path="/student" component={CheckAuth(StudentDashboard)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
