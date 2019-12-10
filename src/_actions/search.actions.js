import { searchConstants } from '../_constants';
import { searchService } from '../_services';

export const searchActions = {
    getResult
};

function getResult(cityId, search_text) {
    return dispatch => {
        dispatch(request());
        searchService.getResult(cityId, search_text)
            .then(
                search => dispatch(success(search)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: searchConstants.SEARCH_RESULT_REQUEST } }
    function success(search) { return { type: searchConstants.SEARCH_RESULT_SUCCESS, search } }
    function failure(error) { return { type: searchConstants.SEARCH_RESULT_FAILURE, error } }
}