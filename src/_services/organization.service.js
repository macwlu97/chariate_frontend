import config from 'config';
import { authHeader, authHeaderFormData } from '../_helpers';
import axios from 'axios';

export const organizationService = {
    getAllOrganization,
    getOrganization,
    getEvent,
    getFundraising,
    getAllEvent,
    getAllFundraising,
    getAllInformation,
    addOrganization,
    getMyOrganization,
    addEvent,
    addFundraiser,
    addInformation,
    putInformation,
    deleteInformation,
    putCoverImage,
    getCoverImage,
    getOrganizationFundraising,
    getOrganizationEvent,
    getAllEventInformation,
    getAllFundraiserInformation
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

function getMyOrganization() {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };


    return axios.get(`${config.apiUrl}/api/v1/organization/me/`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
    // return fetch(`${config.apiUrl}/api/v1/organization/`, requestOptions).then(handleResponse);
}

function addOrganization(toJson) {
    
    // const requestOptions = JSON.stringify({
    //     headers: {
    //         Content-Type: 'application/json',
    //         Authorization: authHeader()["Authorization"],
    //     }
    // })
    // const payload = JSON.stringify({
    //     "name": toJson.name,
    //     "sh_name": toJson.sh_name,
    //     "description": toJson.description,
    //     "city_id": toJson.city_id,
    //     "type": toJson.type
    //   })

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        name: toJson.name,
        sh_name: toJson.sh_name,
        description: toJson.description,
        city_id: toJson.city_id,
        type: toJson.type
      }

    return axios.post(`${config.apiUrl}/api/v1/organization/`, data, requestOptions)

//     return axios.post(`${config.apiUrl}/api/v1/organization/`, headers).then((response) => {
//         var data = response.data
//         return data;
//   });
}


function addEvent(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        title: toJson.title,
        organization_id: toJson.organization_id,
        start_date: toJson.start_date,
        end_date: toJson.end_date,
        city_id: toJson.city_id,
        // type: toJson.type
      }

    return axios.post(`${config.apiUrl}/api/v1/event/`, data, requestOptions)
}

function addFundraiser(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data = {
        title: toJson.title,
        organization_id: toJson.organization_id,
        start_date: toJson.start_date,
        end_date: toJson.end_date,
        // city_id: toJson.city_id,
        description: toJson.description
        // type: toJson.type
      }

    return axios.post(`${config.apiUrl}/api/v1/fundraising/`, data, requestOptions)
}

function addInformation(toJson, mode) {

    const requestOptions = {
        headers: authHeader(),
    };

    let data;
    if (mode === "Organizacja") {
        data = {
            content: toJson.content,
            organization_id: toJson.organization_id,
            type_info_id: toJson.type_info_id,
        }
    } else if (mode === "Event") {
        data = {
            content: toJson.content,
            event_id: toJson.event_id,
            type_info_id: toJson.type_info_id,

        }
    } else if (mode === "Fundraising"){
        data = {
            content: toJson.content,
            fundraising_id: toJson.fundraising_id,
            type_info_id: toJson.type_info_id,
        }
    }

    return axios.post(`${config.apiUrl}/api/v1/information/`, data, requestOptions)
}

function putInformation(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    const information_id = toJson.information_id;
    let data = {
        content: toJson.content,
      }

    return axios.put(`${config.apiUrl}/api/v1/information/${information_id}`, data, requestOptions)
}

function deleteInformation(toJson) {

    const requestOptions = {
        headers: authHeader(),
    };

    const information_id = toJson.information_id;

    return axios.delete(`${config.apiUrl}/api/v1/information/${information_id}`, requestOptions)
}

function putCoverImage(toJson, fileObj) {

    const requestOptions = {
        headers: authHeaderFormData(),
    };

    const organization_id = toJson.organization_id;
    // let data = {
    //     logo: toJson.file_binary,
    //   }
    
    return axios.put(`${config.apiUrl}/api/v1/organization/upload_cover_image/${organization_id}`, fileObj, requestOptions)
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

function getEvent(_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/event/${_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
}

function getFundraising(_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/fundraising/${_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });
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

function getOrganizationFundraising(org_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/fundraising/organization/${org_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

}

function getOrganizationEvent(org_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/event/organization/${org_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

}

function getAllInformation(org_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/information/organization/${org_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

}

function getAllEventInformation(event_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/information/event/${event_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

}

function getAllFundraiserInformation(fundraiser_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader()
    };

    return axios.get(`${config.apiUrl}/api/v1/information/fundraising/${fundraiser_id}`, requestOptions).then((response) => {
        var data = response.data
        return data;
  });

}


function getCoverImage(org_id) {
    const requestOptions = {
        // method: 'GET',
        headers: authHeader(),
        responseType: 'arraybuffer'
    };
    return axios.get(`${config.apiUrl}/api/v1/organization/get_cover_image/${org_id}`, requestOptions).then((response) => {
        var data = response.data
        let image = btoa(
            new Uint8Array(response.data)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          );
        return `data:${response.headers['content-type'].toLowerCase()};base64,${image}`;
        // data = Buffer.from(data, 'binary').toString('base64')
        // console.log(data)
        // return data;
  });
//     return axios.get(`${config.apiUrl}/api/v1/organization/get_cover_image/${org_id}`, requestOptions).then((response) => {
//         var data = response.data
//         var data = btoa(data)
//         console.log(data)
//         return data;
//   });

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