import axios from 'axios'

const domain = process.env.REACT_APP_SUNTIME_CALCULATOR_DOMAIN;
const path = '/sunset-sunrise/today';

const formatParams = (params) => {
    if (!params || !params.latitude || !params.longitude) {
        return '';
    }
    return '?latitude=' + params.latitude + '&longitude=' + params.longitude;
};

const getSunTime = (params) => {
    console.log('params');
    console.log(params);
    return axios.get(domain + path + formatParams(params))
};

export {
    getSunTime
}