import axios from 'axios';

const basePath = 'http://localhost:5002/city-locations/';
const config = {
    Accept: 'application/json'
};

const getAllCities = () => {
    return axios.get(basePath + 'cities');
};

const getCityCoordinates = (cityName) => {
    return axios.get(basePath + 'cities/' + cityName);
};

export {
    getAllCities,
    getCityCoordinates
}