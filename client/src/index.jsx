import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import jwt from 'jsonwebtoken';
import configureStore from './store/configureStore';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import { setCurrentUser } from './actions/auth';
import './static/css/style.css';
import './static/img/signin-bg.jpg';

if (module.hot) {
  module.hot.accept();
}

const store = configureStore();

// Persisting redux store
if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);