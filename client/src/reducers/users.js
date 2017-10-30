import { SET_USERS_COUNT } from '../actions/constants';

const initialState = {};


/**
* Reducer for users-related actions
*
* @param {Object} state The old state of the application
* @param {Object} action The dispatched action
*
* @returns {Object} The new application state
*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USERS_COUNT:
      return {
        ...state,
        admins: action.users.admins,
        instructors: action.users.teachers,
        students: action.users.students
      };

    default:
      return state;
  }
};
