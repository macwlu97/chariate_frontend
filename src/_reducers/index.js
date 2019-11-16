import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { organization } from './organization.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  organization,
  alert,
  registration
});

export default rootReducer;