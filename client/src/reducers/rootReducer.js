import { combineReducers } from 'redux';
import AuthenticatedUserReducer from '../reducers/auth';
import AllUsers from '../reducers/users';

// Mapping of our state
const rootReducer = combineReducers({
  signedInUser: AuthenticatedUserReducer,
  allUsers: AllUsers
});

export default rootReducer;
