import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    login,
    register,
    logout,
    getAll,
    refresh_token,
    update
};

function login(email, password) {
    // var self = this;
    var payload={
    "email":email,
    "password":password
    }

    return axios.post(`${config.apiUrl}/api/v1/obtain_token/`, payload)
    .then(user => {
        var data = user.data
        localStorage.setItem('user', JSON.stringify(data));
        
        return data
      });
}

function register(email, password, first_name, last_name) {
    // var apiBaseUrl = "http://localhost:8000/api/v1/";
    // var self = this;
    var payload={
    "email":email,
    "password":password,
    "first_name": first_name,
    "last_name": last_name
    }

    return axios.post(`${config.apiUrl}/api/v1/create/`, payload)
}

function refresh_token(token) {
    var payload={
        "token":token,    
    }
    
        return axios.post(`${config.apiUrl}/api/v1/api-token-refresh/`, payload)
        .then(user => {
            var user_temporary =  JSON.parse(localStorage.getItem('user'));
            user_temporary.token = user.token+"chww";
            localStorage.setItem('user', JSON.stringify(user_temporary));
            return user;
          });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
}

function update(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        password: toJson.password,
      }

    return axios.put(`${config.apiUrl}/api/v1/update/`, data, requestOptions)
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}