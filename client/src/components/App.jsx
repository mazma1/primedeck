import React from 'react';
import {
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import Home from '../components/Home';
import SignInForm from '../components/main/SignInForm';

/* eslint-disable react/jsx-max-props-per-line */
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path="/"
          component={Home}
        />

        <Route
          exact path="/signin"
          component={SignInForm}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
