import { orgConstants } from '../_constants';

export function organization(state = {}, action) {
  switch (action.type) {
    case orgConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case orgConstants.GETALL_SUCCESS:
      return {
        items: action.organization
      };
    case orgConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}