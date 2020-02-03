import {api_key, api_base_url} from './../constants/api_url';

const getUrlWeatherByCity = city => {
     const api_weather = `${api_base_url}?q=${city}&appid=${api_key}&units=metric`;
     return api_weather;
};

export default getUrlWeatherByCity;