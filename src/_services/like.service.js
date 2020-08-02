import config from 'config';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const likeService = {
    postLikeOrganization,
    postLikeEvent,
    postLikeFundraising,
    get_my_like_organization,
    get_my_like_event,
    get_my_like_fundraising
};

function postLikeOrganization(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        organization_id: toJson.organization_id,
        add_user: toJson.add_user_id
      }

    return axios.post(`${config.apiUrl}/api/v1/like/`, data, requestOptions)
}

function postLikeEvent(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        event_id: toJson.event_id,
        add_user: toJson.add_user_id
      }

    return axios.post(`${config.apiUrl}/api/v1/like/`, data, requestOptions)
}

function postLikeFundraising(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        fundraising_id: toJson.fundraising_id,
        add_user: toJson.add_user_id
      }

    return axios.post(`${config.apiUrl}/api/v1/like/`, data, requestOptions)
}

function get_my_like_organization(org_id) {
    const requestOptions = {
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
    return axios.get(`${config.apiUrl}/api/v1/like/organization/${org_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

function get_my_like_event(event_id) {
    const requestOptions = {
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
    return axios.get(`${config.apiUrl}/api/v1/like/event/${event_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

function get_my_like_fundraising(fundraising_id) {
    const requestOptions = {
        headers: authHeader()
    };

    // return fetch(`${config.apiUrl}/api/v1/user/`, requestOptions).then(handleResponse);
    return axios.get(`${config.apiUrl}/api/v1/like/fundraising/${fundraising_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}
