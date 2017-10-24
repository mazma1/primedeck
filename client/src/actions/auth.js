import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER, DELETE_CURRENT_USER } from './consts';
import setAuthorizationToken from '../../utils/setAuthorizationToken';

/**
  * Makes request to sign in a registered user
  *
  * @param {object} userData user's required sign in credentials
  *
  * @returns {response} request response
  */
export function signInRequest(userData) {
  console.log(userData)
  return dispatch => axios.post('/api/v1/users/signin', userData)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwt.decode(token)));
    });
}

/**
   * Informs reducers that the request to sign in user finished successfully
   *
   * @param {object} user user's information
   *
   * @returns {action} action type and payload
   */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}