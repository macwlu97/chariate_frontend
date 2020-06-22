import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const typeinformationService = {
    getAll,
    // getAllExtended
};

function getAll() {
    const requestOptions = {
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
    return axios.get(`${config.apiUrl}/api/v1/typeinformation/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

// function getAllExtended() {
//     const requestOptions = {
//         headers: authHeader()
//     };

//     // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
//     return axios.get(`${config.apiUrl}/api/v1/city/num_organization/`, requestOptions).then((response) => {
//         var data = response.data
//         return data;
//   });
// }



