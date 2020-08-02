import { likeConstants } from '../_constants';
import { likeService } from '../_services';

export const likeActions = {
    postLikeOrganization,
    postLikeEvent,
    postLikeFundraising,
    get_my_like_organization,
    get_my_like_event,
    get_my_like_fundraising
};

function postLikeOrganization(toJson, mode) {
    return dispatch => {
        dispatch(request());

        likeService.postLikeOrganization(toJson, mode)
            .then(
                like => {
                    dispatch(success(like))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: likeConstants.ADD_LIKE_REQUEST } }
    function success(like) { return { type: likeConstants.ADD_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.ADD_LIKE_FAILURE, error } }
}

function postLikeEvent(toJson, mode) {
    return dispatch => {
        dispatch(request());

        likeService.postLikeEvent(toJson, mode)
            .then(
                like => {
                    dispatch(success(like))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: likeConstants.ADD_LIKE_REQUEST } }
    function success(like) { return { type: likeConstants.ADD_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.ADD_LIKE_FAILURE, error } }
}

function postLikeFundraising(toJson, mode) {
    return dispatch => {
        dispatch(request());

        likeService.postLikeFundraising(toJson, mode)
            .then(
                like => {
                    dispatch(success(like))
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
                
            );
    };

    function request() { return { type: likeConstants.ADD_LIKE_REQUEST } }
    function success(like) { return { type: likeConstants.ADD_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.ADD_LIKE_FAILURE, error } }
}

function get_my_like_organization(org_id) {
    return dispatch => {
        dispatch(request());

        likeService.get_my_like_organization(org_id)
            .then(
                like => dispatch(success(like)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: likeConstants.GET_LIKE_REQUEST } }
    function success(like) { 
        return { type: likeConstants.GET_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.GET_LIKE_FAILURE, error } }
}

function get_my_like_event(event_id) {
    return dispatch => {
        dispatch(request());

        likeService.get_my_like_event(event_id)
            .then(
                like => dispatch(success(like)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: likeConstants.GET_LIKE_REQUEST } }
    function success(like) { 
        return { type: likeConstants.GET_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.GET_LIKE_FAILURE, error } }
}

function get_my_like_fundraising(fundraising_id) {
    return dispatch => {
        dispatch(request());

        likeService.get_my_like_fundraising(fundraising_id)
            .then(
                like => dispatch(success(like)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: likeConstants.GET_LIKE_REQUEST } }
    function success(like) { 
        return { type: likeConstants.GET_LIKE_SUCCESS, like } }
    function failure(error) { return { type: likeConstants.GET_LIKE_FAILURE, error } }
}