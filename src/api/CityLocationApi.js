import axios from 'axios';

const domain = process.env.REACT_APP_SUNTIME_CITIES_DOMAIN;
const path = '/city-locations/';
const config = {
    Accept: 'application/json'
};

const getAllCities = () => {
    return axios.get(domain + path + 'cities');
};

const getCityCoordinates = (cityName) => {
    return axios.get(domain + path + 'cities/' + cityName);
};

export {
    getAllCities,
    getCityCoordinates
}