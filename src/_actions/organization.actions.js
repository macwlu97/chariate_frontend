import { orgConstants } from '../_constants';
import { organizationService } from '../_services';

export const organizationActions = {
    getAll
};

function getAll() {
    return dispatch => {
        dispatch(request());

        organizationService.getAll()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETALL_REQUEST } }
    function success(organization) { return { type: orgConstants.GETALL_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETALL_FAILURE, error } }
}