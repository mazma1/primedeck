import { combineReducers } from 'redux';
import AuthenticatedUserReducer from '../reducers/auth';

// Mapping of our state
const rootReducer = combineReducers({
  signedInUser: AuthenticatedUserReducer
});

export default rootReducer;