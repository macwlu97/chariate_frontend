import { informationOrgConstants } from '../_constants';

export function informationOrg(state = {}, action) {
  switch (action.type) {
    case informationOrgConstants.ADD_INFORMATIONORG_REQUEST:
      return {
        loading: true
      };
    case informationOrgConstants.ADD_INFORMATIONORG_SUCCESS:
      return {
        items: action.information
      };
    case informationOrgConstants.ADD_INFORMATIONORG_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}