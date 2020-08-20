import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    register,
    logout,
    getAll,
    refresh_token,
    update
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.message));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(email, password, first_name, last_name) {
    return dispatch => {
        dispatch(request({ email }));

        userService.register(email, password, first_name, last_name)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/login');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.response.status));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function refresh_token(token) {
    return dispatch => {
        dispatch(request({ token }));

        userService.refresh_token(token)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REFRESH_REQUEST, user } }
    function success(user) { return { type: userConstants.REFRESH_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REFRESH_FAILURE, error } }
}

function update(toJson) {
    return dispatch => {
        dispatch(request());

        userService.update(toJson)
            .then(
                user => { 
                    dispatch(success(user))
                    dispatch(alertActions.success('Account update'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) { return { type: userConstants.USERS_UPDATE_REQUEST, user } }
    function success(user) { return { type: userConstants.USERS_UPDATE_SUCCESS, user } }
    function failure(error) { return { type: userConstants.USERS_UPDATE_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}