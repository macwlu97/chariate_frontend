import { collectionsConstants } from '../_constants';
import { collectionsService } from '../_services';

export const collectionsActions = {
    get_collection
};

function get_collection(pathname) {
    return dispatch => {
        dispatch(request());

        collectionsService.get_collection(pathname)
            .then(
                collections => dispatch(success(collections)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: collectionsConstants.GET_COLLECTIONS_REQUEST } }
    function success(collections) { 
        return { type: collectionsConstants.GET_COLLECTIONS_SUCCESS, collections } }
    function failure(error) { return { type: collectionsConstants.GET_COLLECTIONS_FAILURE, error } }
}