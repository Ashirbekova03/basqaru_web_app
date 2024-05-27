import {reloadHeader, request} from "@/service/utils";

export default {

    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.email
     * @param {number} params.data.username
     *
     * @returns {Promise}
     */
    changeProfile(params = {}) {
        return request('post', '/profile', params).then((response) => {
            reloadHeader(response.data);
            return response;
        })
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.oldPassword
     * @param {String} params.data.password
     *
     * @returns {Promise}
     */
    changePassword(params = {}) {
        return request('post', '/profile/password', params).then((response) => {
            reloadHeader(response.data);
            return response;
        })
    },
    getProfile(params = {}) {
        return request('get', '/profile', params).then((response) => {
            return response;
        })
    },

}