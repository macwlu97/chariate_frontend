import { likeConstants } from '../_constants';

export function like(state = {}, action) {
  switch (action.type) {
    case likeConstants.ADD_LIKE_REQUEST:
      return {
        loading: true
      };
    case likeConstants.ADD_LIKE_SUCCESS:
      return {
        items: action.like
      };
    case likeConstants.ADD_LIKE_FAILURE:
      return { 
        error: action.error
      };
    case likeConstants.GET_LIKE_REQUEST:
      return {
        loading: true
      };
    case likeConstants.GET_LIKE_SUCCESS:
      return {
        items: action.like
      };
    case likeConstants.GET_LIKE_FAILURE:
      return { 
        error: action.error
      };
    case likeConstants.PUT_LIKE_REQUEST:
      return {
        loading: true
      };
    case likeConstants.PUT_LIKE_SUCCESS:
      return {
        items: action.like
      };
    case likeConstants.PUT_LIKE_FAILURE:
      return { 
        error: action.error
      };
    case likeConstants.DELETE_LIKE_REQUEST:
      return {
        loading: true
      };
    case likeConstants.DELETE_LIKE_SUCCESS:
      return {
        items: action.like
      };
    case likeConstants.DELETE_LIKE_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}