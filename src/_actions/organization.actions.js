import { orgConstants } from '../_constants';
import { eventConstants } from '../_constants';
import { fundraiserConstants } from '../_constants';
import { informationOrgConstants } from '../_constants';
import { logoOrgConstants } from '../_constants';
import { organizationService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const organizationActions = {
    getAllOrganization,
    getOrganization,
    getAllEvent,
    getAllFundraising,
    getAllInformation,
    addOrganization,
    getMyOrganization,
    addEvent,
    addFundraiser,
    addInformation,
    putInformation,
    deleteInformation,
    putCoverImage,
    getCoverImage
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

function getMyOrganization() {
    return dispatch => {
        dispatch(request());

        organizationService.getMyOrganization()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: orgConstants.GETMY_REQUEST } }
    function success(organization) { return { type: orgConstants.GETMY_SUCCESS, organization } }
    function failure(error) { return { type: orgConstants.GETMY_FAILURE, error } }
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

function addEvent(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.addEvent(toJson)
            .then(
                event => {
                    dispatch(success(event))
                    history.push('/');
                    dispatch(alertActions.success('Event successful'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: eventConstants.ADD_EVENT_REQUEST } }
    function success(event) { return { type: eventConstants.ADD_EVENT_SUCCESS, event } }
    function failure(error) { return { type: eventConstants.ADD_EVENT_FAILURE, error } }
}

function addFundraiser(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.addFundraiser(toJson)
            .then(
                fundraiser => {
                    dispatch(success(fundraiser))
                    history.push('/');
                    dispatch(alertActions.success('Fundraiser successful'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: fundraiserConstants.ADD_FUNDRAISER_REQUEST } }
    function success(event) { return { type: fundraiserConstants.ADD_FUNDRAISER_SUCCESS, event } }
    function failure(error) { return { type: fundraiserConstants.ADD_FUNDRAISER_FAILURE, error } }
}

function addInformation(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.addInformation(toJson)
            .then(
                information => {
                    dispatch(success(information))
                    history.push('/');
                    dispatch(alertActions.success('Information successful'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: informationOrgConstants.ADD_INFORMATIONORG_REQUEST } }
    function success(information) { return { type: informationOrgConstants.ADD_INFORMATIONORG_SUCCESS, information } }
    function failure(error) { return { type: informationOrgConstants.ADD_INFORMATIONORG_FAILURE, error } }
}

function putInformation(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.putInformation(toJson)
            .then(
                information => {
                    dispatch(success(information))
                    // history.push('/organization');
                    dispatch(alertActions.success('Information put successful'));
                    
                    // setTimeout(function () {
                    //     window.location.reload(false);
                    // }, 5000);
                    
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: informationOrgConstants.PUT_INFORMATIONORG_REQUEST } }
    function success(information) { return { type: informationOrgConstants.PUT_INFORMATIONORG_SUCCESS, information } }
    function failure(error) { return { type: informationOrgConstants.PUT_INFORMATIONORG_FAILURE, error } }
}



function deleteInformation(toJson) {
    return dispatch => {
        dispatch(request());

        organizationService.deleteInformation(toJson)
            .then(
                information => {
                    dispatch(success(information))
                    // history.push('/organization');
                    dispatch(alertActions.success('Information delete successful'));
                    
                    // setTimeout(function () {
                    //     window.location.reload(false);
                    // }, 5000);
                    
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: informationOrgConstants.DELETE_INFORMATIONORG_REQUEST } }
    function success(information) { return { type: informationOrgConstants.DELETE_INFORMATIONORG_SUCCESS, information } }
    function failure(error) { return { type: informationOrgConstants.DELETE_INFORMATIONORG_FAILURE, error } }
}

function putCoverImage(toJson, fileObj) {
    return dispatch => {
        dispatch(request());

        organizationService.putCoverImage(toJson, fileObj)
            .then(
                logo => {
                    dispatch(success(logo))
                    // history.push('/organization');
                    dispatch(alertActions.success('Logo put successful'));
                    
                    // setTimeout(function () {
                    //     window.location.reload(false);
                    // }, 5000);
                    
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: logoOrgConstants.PUT_LOGOORG_REQUEST } }
    function success(logo) { return { type: logoOrgConstants.PUT_LOGOORG_SUCCESS, logo } }
    function failure(error) { return { type: logoOrgConstants.PUT_LOGOORG_FAILURE, error } }
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


function getAllInformation(setInformation, org_id) {
    return dispatch => {
        dispatch(request());

        organizationService.getAllInformation(org_id)
            .then(
                information => dispatch(success(information, setInformation)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: informationOrgConstants.GET_INFORMATIONORG_REQUEST } }
    function success(information, setInformation) { 
        setInformation(information)
        return { type: informationOrgConstants.GET_INFORMATIONORG_SUCCESS, information } }
    function failure(error) { return { type: informationOrgConstants.GET_INFORMATIONORG_FAILURE, error } }
}

function getCoverImage(setFileBinary, org_id) {
    return dispatch => {
        dispatch(request());

        organizationService.getCoverImage(org_id)
            .then(
                logo => dispatch(success(logo, setFileBinary)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: logoOrgConstants.GET_LOGOORG_REQUEST } }
    function success(logo, setFileBinary) { 
        setFileBinary(logo)
        return { type: logoOrgConstants.GET_LOGOORG_SUCCESS, logo } }
    function failure(error) { return { type: logoOrgConstants.GET_LOGOORG_FAILURE, error } }
}