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
    case orgConstants.ADD_REQUEST:
      return {
        loading: true
      };
    case orgConstants.ADD_SUCCESS:
      return {
        items: action.organization
      };
    case orgConstants.ADD_FAILURE:
      return { 
        error: action.error
      };
    case orgConstants.GETMY_REQUEST:
      return {
        loading: true
      };
    case orgConstants.GETMY_SUCCESS:
      return {
        items: action.organization
      };
    case orgConstants.GETMY_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}