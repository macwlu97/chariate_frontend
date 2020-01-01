import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const cityService = {
    getAll
};

function getAll() {
    const requestOptions = {
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
    return axios.get(`${config.apiUrl}/api/v1/city/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

