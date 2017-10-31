import { combineReducers } from 'redux';
import AuthenticatedUserReducer from '../reducers/auth';
import AllUsersReducer from '../reducers/users';
import AllCoursesReducer from '../reducers/courses';

// Mapping of our state
const rootReducer = combineReducers({
  signedInUser: AuthenticatedUserReducer,
  users: AllUsersReducer,
  courses: AllCoursesReducer
});

export default rootReducer;
