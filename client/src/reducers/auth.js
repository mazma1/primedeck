import isEmpty from 'lodash/isEmpty';
import { SET_CURRENT_USER, DELETE_CURRENT_USER } from '../actions/consts';

const initialState = {
  isAuthenticated: false,
  user: {} 
}


/**
* Reducer for authentication-related actions
*
* @param {Object} state The old state of the application
* @param {Object} action The dispatched action
*
* @returns {Object} The new application state
*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: {
          id: action.user.data.id,
          firstname: action.user.data.firstName,
          lastname: action.user.data.lastName,
          username: action.user.data.username,
          email: action.user.data.email,
          role: action.user.data.role
        }
      };

    case DELETE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    default:
      return state;
  }
};