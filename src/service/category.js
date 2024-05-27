import {reloadHeader, request} from "@/service/utils";

export default {

    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.imageUrl
     * @param {String} params.data.name
     * @param {Number} params.data.limit
     *
     * @returns {Promise}
     */
    add(params = {}) {
        return request('post', '/category', params).then((response) => {
            return response;
        })
    },
    findAll() {
        return request('get', '/category').then((response) => {
            return response;
        })
    },

}