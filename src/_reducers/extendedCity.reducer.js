import { extendedCityConstants } from '../_constants';

export function extendedCity(state = {}, action) {
  switch (action.type) {
    case extendedCityConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case extendedCityConstants.GETALL_SUCCESS:
      return  action.extendedCity
      
    case extendedCityConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}