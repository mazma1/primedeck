import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import Home from '../components/Home';
import SignInForm from '../components/SignInForm';
import AdminDashboard from '../components/Admin';
import TeacherDashboard from '../components/Teacher';
import StudentDashboard from '../components/Student';

/* eslint-disable react/jsx-max-props-per-line */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignInForm} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/teacher" component={TeacherDashboard} />
        <Route path="/student" component={StudentDashboard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
