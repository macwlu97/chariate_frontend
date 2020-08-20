import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const typeinformationService = {
    getAll,
};

function getAll() {
    const requestOptions = {
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/typeinformation/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

