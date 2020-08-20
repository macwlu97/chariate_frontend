import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const cityService = {
    getAll,
    getAllExtended
};

function getAll() {
    const requestOptions = {
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/city/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

function getAllExtended() {
    const requestOptions = {
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/city/num_organization/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}



