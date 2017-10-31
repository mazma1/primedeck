import { SET_ALL_COURSES } from '../actions/constants';

const initialState = {
  courses: []
};


/**
* Reducer for coursess-related actions
*
* @param {Object} state The old state of the application
* @param {Object} action The dispatched action
*
* @returns {Object} The new application state
*/
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ALL_COURSES:
      return {
        ...state,
        courses: action.courses
      };

    default:
      return state;
  }
};
