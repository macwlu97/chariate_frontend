import { typeinformationConstants } from '../_constants';

export function typeinformation(state = {}, action) {
  switch (action.type) {
    case typeinformationConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case typeinformationConstants.GETALL_SUCCESS:
      return {
        items: action.typeinformation
      };
    case typeinformationConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}