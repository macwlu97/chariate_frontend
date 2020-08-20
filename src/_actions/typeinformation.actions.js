import { typeinformationConstants } from '../_constants';
import { typeinformationService } from '../_services';

export const typeinformationActions = {
    getAll,
};

function getAll(setTypeinformation) {
    return dispatch => {
        dispatch(request());

        typeinformationService.getAll()
            .then(
                typeinformation => dispatch(success(typeinformation,setTypeinformation)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: typeinformationConstants.GETALL_REQUEST } }
    function success(typeinformation, setTypeinformation) { 
        setTypeinformation(typeinformation)
        return { type: typeinformationConstants.GETALL_SUCCESS, typeinformation } }
    function failure(error) { return { type: typeinformationConstants.GETALL_FAILURE, error } }
}

