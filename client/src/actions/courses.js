import axios from 'axios';
import { SET_ALL_COURSES } from '../actions/constants';

/**
   * Informs reducers that the request to get all users finished successfully
   *
   * @param {object} users all users
   *
   * @returns {action} action type and payload
   */
export function setAllCourses(courses) {
  return {
    type: SET_ALL_COURSES,
    courses
  };
}


/**
  * Makes request to get all courses available in the database
  *
  * @returns {response} request response
  */
export function getAllCourses() {
  return dispatch => axios.get('/api/v1/courses')
    .then((res) => {
      const { courses } = res.data;
      dispatch(setAllCourses(courses));
    });
}
