import { fundraiserConstants } from '../_constants';

export function fundraiser(state = {}, action) {
  switch (action.type) {
    case fundraiserConstants.GET_FUNDRAISER_REQUEST:
      return {
        loading: true
      };
    case fundraiserConstants.GET_FUNDRAISER_SUCCESS:
      return {
        items: action.fundraiser
      };
    case fundraiserConstants.GET_FUNDRAISER_FAILURE:
      return { 
        error: action.error
      };
    case fundraiserConstants.ADD_FUNDRAISER_REQUEST:
      return {
        loading: true
      };
    case fundraiserConstants.ADD_FUNDRAISER_SUCCESS:
      return {
        items: action.fundraiser
      };
    case fundraiserConstants.ADD_FUNDRAISER_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}