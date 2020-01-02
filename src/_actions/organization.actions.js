import { orgConstants } from '../_constants';
import { organizationService } from '../_services';

export const organizationActions = {
    getAllOrganization,
    getOrganization,
    getAllEvent,
    getAllFundraising
};

function getAllOrganization() {
    return dispatch => {
        dispatch(request());

        organizationService.getAllOrganization()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETALL_REQUEST } }
    function success(organization) { return { type: orgConstants.GETALL_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETALL_FAILURE, error } }
}

function getOrganization(_id) {
    return dispatch => {
        dispatch(request());

        organizationService.getOrganization(_id)
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETALL_REQUEST } }
    function success(organization) { return { type: orgConstants.GETALL_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETALL_FAILURE, error } }
}

function getAllEvent() {
    return dispatch => {
        dispatch(request());

        organizationService.getAllEvent()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETALL_REQUEST } }
    function success(organization) { return { type: orgConstants.GETALL_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETALL_FAILURE, error } }
}

function getAllFundraising() {
    return dispatch => {
        dispatch(request());

        organizationService.getAllFundraising()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETALL_REQUEST } }
    function success(organization) { return { type: orgConstants.GETALL_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETALL_FAILURE, error } }
}