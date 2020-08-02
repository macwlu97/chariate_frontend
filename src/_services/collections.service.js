import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const collectionsService = {
    get_collection
};


function get_collection(pathname) {
    const requestOptions = {
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/like${pathname}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}