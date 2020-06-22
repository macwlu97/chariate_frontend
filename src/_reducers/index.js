import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { organization } from './organization.reducer';
import { event } from './event.reducer';
import { fundraiser } from './fundraiser.reducer';
import { alert } from './alert.reducer';
import { registration } from './registration.reducer';
import { search } from './search.reducer';
import { city } from './city.reducer';
import { extendedCity } from './extendedCity.reducer';
import { typeinformation } from './typeinformation.reducer';


const rootReducer = combineReducers({
  authentication,
  users,
  organization,
  event,
  fundraiser,
  alert,
  registration,
  search,
  city,
  extendedCity,
  typeinformation
});

export default rootReducer;