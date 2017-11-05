import { SET_USERS_COUNT, SET_ALL_USERS } from '../actions/constants';

const initialState = {
  usersCount: {},
  allUsers: []
};


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
        usersCount: {
          admins: action.users.admins,
          instructors: action.users.teachers,
          students: action.users.students
        }
      };

    case SET_ALL_USERS:
      return {
        ...state,
        allUsers: action.allUsers.users,
        pagination: action.allUsers.pagination
      };

    default:
      return state;
  }
};
