import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';
import {
    CLOUD ,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from './../../../constants/weathers';

const icons = {
    [SUN] :  "day-sunny",
    [RAIN]   : "rain",
    [SNOW] : "snow",
    [WINDY] : "windy",
    [CLOUD]: "cloud",
    [CLOUDY]:"cloudy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = "4x";
    if (icon)
        return (
        <WeatherIcons name={`${icon}`} size={sizeIcon} className="wicon"></WeatherIcons>
        );
    else 
        return (<WeatherIcons name={`${icons[SUN]}`} size={sizeIcon} className="wicon"></WeatherIcons>);
};

const WeatherTemperature = ({temperature,weatherState}) => {
//const {temperature,weatherState} = props
return (
    <div className="weatherTemperaturecont">
       {
           getWeatherIcon (weatherState)
       }
      <span className="temperature">{`${temperature}`}</span>
      <span className="temperatureTye">{`C°`}</span>      
    </div>
  );

};

WeatherTemperature.propTypes = {
    temperature : PropTypes.number.isRequired,
    weatherState : PropTypes.string.isRequired,
};

export default WeatherTemperature;