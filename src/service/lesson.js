import {reloadHeader, request} from "@/service/utils";

export default {

    findAll() {
        return request('get', '/lessons/all').then((response) => {
            return response;
        })
    },
    search(word) {
        return request('get', '/lessons/search?word=' + word).then((response) => {
            return response;
        })
    },

}