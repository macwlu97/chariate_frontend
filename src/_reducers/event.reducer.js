import { eventConstants } from '../_constants';

export function event(state = {}, action) {
  switch (action.type) {
    case eventConstants.ADD_EVENT_REQUEST:
      return {
        loading: true
      };
    case eventConstants.ADD_EVENT_SUCCESS:
      return {
        items: action.event
      };
    case eventConstants.ADD_EVENT_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}