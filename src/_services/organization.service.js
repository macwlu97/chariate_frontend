import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const organizationService = {
    getAllOrganization,
    getOrganization,
    getAllEvent,
    getAllFundraising
};

function getAllOrganization() {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/organization/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
    // return fetch(`${config.apiUrl}/api/v1/organization/`, requestOptions).then(handleResponse);
}

function getOrganization(_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/organization/${_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
    // return fetch(`${config.apiUrl}/api/v1/organization/`, requestOptions).then(handleResponse);
}


function getAllEvent() {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/event/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
    // return fetch(`${config.apiUrl}/api/v1/organization/`, requestOptions).then(handleResponse);
}

function getAllFundraising() {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/fundraising/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

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