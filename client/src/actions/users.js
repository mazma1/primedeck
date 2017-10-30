import axios from 'axios';
import { SET_USERS_COUNT } from './constants';


/**
   * Informs reducers that the request to get users count finished successfully
   *
   * @param {object} users users' count
   *
   * @returns {action} action type and payload
   */
export function setUsersCount(users) {
  return {
    type: SET_USERS_COUNT,
    users
  };
}


/**
  * Makes request to get user's statistics
  *
  * @returns {response} request response
  */
export function getUsersStatistics() {
  return dispatch => axios.get('/api/v1/users/count')
    .then((res) => {
      const users = res.data;
      dispatch(setUsersCount(users));
    });
}
