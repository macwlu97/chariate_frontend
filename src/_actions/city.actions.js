import { cityConstants, extendedCityConstants } from '../_constants';
import { cityService } from '../_services';

export const cityActions = {
    getAll,
    getAllExtended
};

function getAll(setCity) {
    return dispatch => {
        dispatch(request());

        cityService.getAll()
            .then(
                city => dispatch(success(city, setCity)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: cityConstants.GETALL_REQUEST } }
    function success(city, setCity) { 
        setCity(city)
        return { type: cityConstants.GETALL_SUCCESS, city } }
    function failure(error) { return { type: cityConstants.GETALL_FAILURE, error } }
}

function getAllExtended() {
    return dispatch => {
        dispatch(request());

        cityService.getAllExtended()
            .then(
                extendedCity => dispatch(success(extendedCity)),
                error => dispatch(failure(error))
            );
        
    };

    function request() { return { type: extendedCityConstants.GETALL_REQUEST } }
    function success(extendedCity) { 
        return { type: extendedCityConstants.GETALL_SUCCESS, extendedCity } }
    function failure(error) { return { type: extendedCityConstants.GETALL_FAILURE, error } }
}