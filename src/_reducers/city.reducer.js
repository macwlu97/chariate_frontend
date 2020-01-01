import { cityConstants } from '../_constants';

export function city(state = {}, action) {
  switch (action.type) {
    case cityConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case cityConstants.GETALL_SUCCESS:
      return {
        items: action.city
      };
    case cityConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}