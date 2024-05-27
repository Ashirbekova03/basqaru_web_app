import {reloadHeader, request} from "@/service/utils";

export default {

    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {number} params.data.amount
     * @param {number} params.data.categoryId
     * @param {Boolean} params.data.isReceive
     *
     * @returns {Promise}
     */
    add(params = {}) {
        return request('post', '/transaction', params).then((response) => {
            return response;
        })
    },
    findAll() {
        return request('get', '/transaction').then((response) => {
            return response;
        })
    },
    byPeriod(from, to) {
        return request('get', '/transaction/period?from=' + from + "&to=" + to).then((response) => {
            return response;
        })
    },

}