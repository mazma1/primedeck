import { combineReducers } from 'redux';
import AuthenticatedUserReducer from '../reducers/auth';
import AllUsersReducer from '../reducers/users';

// Mapping of our state
const rootReducer = combineReducers({
  signedInUser: AuthenticatedUserReducer,
  users: AllUsersReducer
});

export default rootReducer;
