import { orgConstants } from '../_constants';
import { organizationService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const organizationActions = {
    getAllOrganization,
    getOrganization,
    getAllEvent,
    getAllFundraising,
    addOrganization,
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

function addOrganization(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.addOrganization(toJson)
            .then(
                organization => {
                    dispatch(success(organization))
                    history.push('/');
                    dispatch(alertActions.success('Organization successful'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: orgConstants.ADD_REQUEST } }
    function success(organization) { return { type: orgConstants.ADD_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.ADD_FAILURE, error } }
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