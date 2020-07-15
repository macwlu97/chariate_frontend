import { logoOrgConstants } from '../_constants';

export function logoOrg(state = {}, action) {
  switch (action.type) {
    case logoOrgConstants.PUT_LOGOORG_REQUEST:
      return {
        loading: true
      };
    case logoOrgConstants.PUT_LOGOORG_SUCCESS:
      return {
        items: action.logo
      };
    case logoOrgConstants.PUT_LOGOORG_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}