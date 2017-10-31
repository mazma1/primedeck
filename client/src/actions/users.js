import axios from 'axios';
import { SET_USERS_COUNT, SET_ALL_USERS } from './constants';


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

/**
   * Informs reducers that the request to get all users finished successfully
   *
   * @param {object} users all users
   *
   * @returns {action} action type and payload
   */
export function setAllUsers(allUsers) {
  return {
    type: SET_ALL_USERS,
    allUsers
  };
}

/**
  * Makes request to get all users
  *
  * @returns {response} request response
  */
export function getAllUsers({ offset = 0, limit = 2 }) {
  return dispatch => axios.get(`/api/v1/users?limit=${limit}&offset=${offset}`)
    .then((res) => {
      const { users, pagination } = res.data;
      const allUsers = { users, pagination };
      dispatch(setAllUsers(allUsers));
    });
}
