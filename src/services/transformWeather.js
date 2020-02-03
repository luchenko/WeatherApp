import {
    CLOUD ,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../constants/weathers';

const getWeatherState = weather_data => {
    const {id} = weather_data;
    return CLOUD;
};

const transformWeather = weather_data => {
        const {humidity,temp} = weather_data.main;
        const { speed} = weather_data.wind;
        const weatherState  = getWeatherState(weather_data);
        const city = weather_data.name;
        const data = {
            city,
            humidity,
            temperature:temp,
            weatherState,
            wind:`${speed} m/seg`,
        }
        return data;
};

export default transformWeather;
