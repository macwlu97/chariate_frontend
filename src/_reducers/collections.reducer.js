import { collectionsConstants } from '../_constants';

export function collections(state = {}, action) {
  switch (action.type) {

    case collectionsConstants.GET_COLLECTIONS_REQUEST:
      return {
        loading: true
      };
    case collectionsConstants.GET_COLLECTIONS_SUCCESS:
      return {
        items: action.collections
      };
    case collectionsConstants.GET_COLLECTIONS_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}