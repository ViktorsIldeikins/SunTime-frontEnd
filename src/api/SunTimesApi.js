import axios from 'axios'

const basePath = 'http://localhost:8080/sunset-sunrise/today';

const formatParams = (params) => {
    if (!params || !params.latitude || !params.longitude) {
        return '';
    }
    return '?latitude=' + params.latitude + '&longitude=' + params.longitude;
};

const getSunTime = (params) => {
    console.log('params');
    console.log(params);
    return axios.get(basePath + formatParams(params))
};

export {
    getSunTime
}