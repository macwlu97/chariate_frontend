import { searchConstants } from '../_constants';

export function search(state = {}, action) {
  switch (action.type) {
    case searchConstants.SEARCH_RESULT_REQUEST:
      return {
        loading: true
      };
    case searchConstants.SEARCH_RESULT_SUCCESS:
      return {
        items: action.search
      };
    case searchConstants.SEARCH_RESULT_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}