import axios from 'axios'
import $storage from "@/storage";


const ERROR_STATUSES = { NOT_AUTHORIZED: 401, FORBIDDEN: 403 };
const instance = axios.create({baseURL: "http://195.49.210.209:9098/api/"});
instance.defaults.headers.common['Content-Type'] = 'application/json';

// instance.defaults.headers.common['Role'] = 'ADMIN';

const auth_token = $storage.local_storage.get('auth_token')

if (auth_token) {
    instance.defaults.headers.common.Authorization = `${auth_token}`;
}

export const reloadHeader = (data) => {
    $storage.local_storage.set("auth_token", data.token);
    instance.defaults.headers.common.Authorization = `${data.token}`;
}

export const logout = () => {
    $storage.local_storage.remove("auth_token");
    instance.defaults.headers.common.Authorization = ``;
}

const errorHandler = (error) => {
    const { status } = errorHandler.response
    if ($storage.local_storage.get('auth_token') || status === ERROR_STATUSES.NOT_AUTHORIZED) {
        $storage.local_storage.remove('auth_token');
        delete instance.defaults.headers.common.Authorization;
    }
    throw error;
}

export const request = (method, url, data = {}, options = {}) => {
    if (options.isFile) {
        instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
    }
    let responseType = "json";
    if (options.isBlob) {
        responseType = "blob";
    }
    return instance({
        method, url: url, ...data, responseType, headers: { ...options.headers },
    }).catch(errorHandler);
}
export const requestFormData = (method, url, formDataBody) => {
    return instance({
        method: method,
        url: url,
        data: formDataBody,
        headers: { "Content-Type": "multipart/form-data" },
    }).catch(errorHandler);
}
