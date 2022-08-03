
import * as axios from 'axios';


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/'

export function getUsersApi(page, pageSize) {
    return axios.get(`${baseUrl}users?page=${page}&count=${pageSize}`,
        {
            withCredentials: true,
        }
    ).then(res => {
        return res.data
    })
}

export function postFollowApi(id) {
    return axios.post(`${baseUrl}follow/${id}`, {}, {
        withCredentials: true,
        headers: {
            'API-KEY': '2cad7ddc-fd72-420b-b78d-53aafbea6d08'
        }

    }).then(res => {

        return res.data

    })
}


export function deleteFollowApi(id) {
    return axios.delete(`${baseUrl}follow/${id}`, {
        withCredentials: true,
        headers: {
            'API-KEY': '2cad7ddc-fd72-420b-b78d-53aafbea6d08'
        }
    }).then(res => {
        return res.data
    })
}

export function getProfileApi(userId) {
    return axios.get(`${baseUrl}profile/${userId}`).then(res => {
        return res.data
    })
}

export function getAuthApi() {
    return axios.get(`${baseUrl}auth/me`, {
        withCredentials: true
    })
        .then(res => {
            return res.data
        })
}
