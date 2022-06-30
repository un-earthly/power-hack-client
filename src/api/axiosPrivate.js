import axios from "axios";

const axiosPrivate = axios.create({});
axiosPrivate.interceptors.request.use(function (config) {
    if (!config.headers.authorization) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosPrivate