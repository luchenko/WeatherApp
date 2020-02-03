import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = ({cities}) => {
    return( <div>
        <WeatherLocation city = 'Antofagasta'></WeatherLocation>
        <WeatherLocation city = 'Mejillones'></WeatherLocation>
        <WeatherLocation city = 'London'></WeatherLocation>
    </div>); 
};

LocationList.propTypes = {
    cities: PropTypes.array,isRequired,
}
export default LocationList;
